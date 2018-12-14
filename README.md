# OptionsHandler
Enables a combination of named parameters, default values and order-defined values, for easy-to-read function invocation.

/**
 * Martin Krisell 2018
 *
 * Simple library to allow a function to take both
 * an options object (named parameters) as well as
 * simple arguments where their index maps to a
 * specific option property.
 *
 * Use in the following way:
 * --------------------------
 * 1)   Import/include the OptionsHandler however you like. If you don't use
 *      ES6-modules, leave out the "export default OptionsHandler". The library
 *      do use ES6-syntax however.
 *
 * 2)   Use the rest-operator (...) to gather all arguments that are passed to your
 *      function in a specifications-array.
 *
 * 3)   Call OptionsHandler.build({}) with an object containing the following properties:
 *        specs: The array of arguments to your function, built by the rest-operator.
 *        default_options: An object with any default options you would like to use.
 *        named_specs: An array which names the special arguments in the expected order.
 *
 * Example
 * -------------------------
 *  function doSomething (...specs) {
      const options = OptionsHandler.build({
        specs,
        default_options: { key: value },
        named_specs: ['argOneKey', 'argTwoKey', 'argThreeKey']
      })

      // Now, options consists of a merge between the default options, any options
      // passed in as an object and most importantly, if the first argument was not
      // an object it's value will be set in the argOneKey-property of options, and
      // similar for the rest.
    }
 *
 * You may pass several objects with option-properties, but you should always
 * pass the primitive arguments first, and end with one or more ojects.
 */


   /**
   * Build and return the options object.
   * Takes an object with the following properties:
   *    specs: The arguments array
   *    default_options: Any default options you would like to use. Defaults to {}
   *    named_specs: The magic. Name the properties in the order you would like to use
   *                 them as simple arguments instead.
   *
   * Someone should make a library for calling this function with standard
   * arguments instead...
   */


       /**
     * Any object given will be treated as a options object.
     * Order-defined namedOptions only applies for intial primitive values.
     */
