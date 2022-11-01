import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with the first parameter only', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods true class', () => {
        const expected = 'someClass class1 class2 hover scrollable'
        expect(
            classNames('someClass', { hover: true, scrollable: true }, ['class1', 'class2']),
        ).toBe(expected)
    })

    test('with mods false class', () => {
        const expected = 'someClass class1 class2 hover'
        expect(
            classNames('someClass', { hover: true, scrollable: false }, ['class1', 'class2']),
        ).toBe(expected)
    })

    test('with mods undefined class', () => {
        const expected = 'someClass class1 class2 hover'
        expect(
            classNames('someClass', { hover: true, scrollable: undefined }, ['class1', 'class2']),
        ).toBe(expected)
    })
})
