const OptionsHandler = {
  build ({ specs, defaultOptions, namedOptions }) {
    let options = Object.assign({}, defaultOptions || {})

    /**
     * Any object given will be treated as a options object.
     * Order-defined namedOptions only applies for intial primitive values.
     */
    specs.forEach((spec, index) => {
      if (typeof spec !== 'object' && typeof spec !== 'function') {
        if ((namedOptions || []).length >= index + 1) {
          options[namedOptions[index]] = spec  
        }
      }

      if (typeof spec === 'object') {
        options = Object.assign(options, spec)
      }
    })

    return options
  }
}

export default OptionsHandler

