# better-arguments

`better-arguments` is an extremely small package (`< 0.5KB minified and gzipped`) that enables a combination of named arguments, default values and order-defined values, for easy-to-read function invocation.

## An example
```js
import BetterArguments from '@krisell/better-arguments'

function request(...specs) {
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

The function `request` may now be called in any of the following ways, yielding the exact same result.
```js
request({
    method: 'get',
    url: 'api/users',
    responseType: 'json',
})

request('api/users', 'get', 'json')

request('api/users')

request('api/users', 'get', {
    responseType: 'json'
})
```


## Installation
```bash
npm install @krisell/better-arguments
```

# How to use
1. Use the rest-operator (```...```) to gather all arguments that are passed to your function.

2. Call ```BetterArguments.build({})``` with an object containing the following properties:
     * `specs`: The array of arguments to your function, built by the rest-operator.
     * `defaultOptions`: An object with any default options you would like to use.
     * `namedOptions`: An array which names the special arguments in the expected order.

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
