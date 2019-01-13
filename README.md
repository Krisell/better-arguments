# Improved JavaScript function arguments
Enables a combination of named arguments, default values and order-defined values, for easy-to-read function invocation.

better-arguments is an extremely small and simple library to allow a function to take both an options object (named arguments) as well as primitive arguments where their indices map to specific option properties.

This enables any method to be called in the preferred way. For instance an XHR-function might accept an object specifying url and method, but sometimes you might want to pass in the url as a string as the first argument.

# Installation
You can pull in the code through npm, or just copy the contents and importing the code manually.

## Through npm
```npm install @krisell/better-arguments```

## By importing code
Include lib/index.js in your project however you like. If you don't use ES6-modules, leave out the "export default BetterArguments". The library do use ES6-syntax however and transpilation may be needed.

# How to use
1. Use the rest-operator (```...```) to gather all arguments that are passed to your function in a specifications-array.

2. Call ```BetterArguments.build({})``` with an object containing the following properties:
     * specs: The array of arguments to your function, built by the rest-operator.
     * defaultOptions: An object with any default options you would like to use.
     * namedOptions: An array which names the special arguments in the expected order.

# Template
```js
function doSomething (...specs) {
  const options = BetterArguments.build({
    specs,
    defaultOptions: { key: value },
    namedOptions: ['argOneKey', 'argTwoKey', 'argThreeKey']
  })

  // Implement function with access to options.property
}
```

Now, options consists of a merge between the default options, any options passed in as an object and most importantly, if the first argument was not an object it's value will be set in the argOneKey-property of options, and similar for the rest.
    
You may pass several objects with option-properties, but you should always pass the primitive arguments first, and end with one or more ojects. You can not pass objects as a specific named options, since it will be treated as an options object.

# An example
```js
function xhr (...specs) {
  const options = BetterArguments.build({
    specs,
    defaultOptions: { 
        method: 'get',
        responseType: 'json',
    },
    namedOptions: ['url', 'method', 'responseType']
  })

  // Implementation ...
}
```

xhr may now be called in any of the following ways, yielding the exact same result.
```js
xhr({
    method: 'get',
    url: 'api/users',
    responseType: 'json',
})

xhr('api/users', 'get', 'json')

xhr('api/users')

xhr('api/users', 'get', {
    responseType: 'json'
})
```

