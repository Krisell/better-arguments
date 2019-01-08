import OptionsHandler from './OptionsHandler'

test('It sets default arguments', () => {
    const fn = (...specs) => {
        const options = OptionsHandler.build({
            specs,
            defaultOptions: { one: 1, two: 2, three: 4 },
        })

        expect(options.one).toBe(1)
        expect(options.two).toBe(2)
        expect(options.three).toBe(3)
    }

    fn({ three: 3 })
})

test('It allows for named options', () => {
    const fn = (...specs) => {
        const options = OptionsHandler.build({
            specs,
            namedOptions: ['name', 'animal']
        })

        expect(options.name).toBe('Martin')
        expect(options.animal).toBe('Cat')
        expect(options.car).toBe('RR')
    }

    fn('Martin', 'Cat', { car: 'RR' })
})

test('It can be called with an options object as named parameters', () => {
    const fn = (...specs) => {
        const options = OptionsHandler.build({ specs })

        expect(options.name).toBe('Martin')
        expect(options.animal).toBe('Cat')
        expect(options.car).toBe('RR')
    }

    fn({ name: 'Martin', animal: 'Cat', car: 'RR' })
})

test('Specified arguments overrides default ones', () => {
    const fn = (...specs) => {
        const options = OptionsHandler.build({ 
            specs,
            defaultOptions: { name: 'Martin', animal: 'Cat', car: 'Toyota' }
        })

        expect(options.name).toBe('Martin')
        expect(options.animal).toBe('Dog')
        expect(options.car).toBe('RR')
    }

    fn({ animal: 'Dog', car: 'RR' })
})

test('It handles a mix of arguments, prioritizing later objects', () => {
    const fn = (...specs) => {
        const options = OptionsHandler.build({ 
            specs,
            defaultOptions: { name: 'Martin', animal: 'Cat', car: 'Toyota' },
            namedOptions: ['name', 'animal']
        })

        expect(options.name).toBe('Krisell')
        expect(options.animal).toBe('Cow')
        expect(options.car).toBe('A big one')
    }

    fn('Martin', 'Cat', { name: 'Krisell', animal: 'Dog' }, { animal: 'Cow' }, { car: 'A big one' })
})
