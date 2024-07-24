import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from '../src/js';

test('Capitalize: first letter function', () => {
    expect(capitalize('something')).toBe('Something');
    expect(capitalize('')).toBe('');
});

test('Capitalize: only the first letter', () => {
    expect(capitalize('some string')).toBe('Some string');
});

test('Capitalize: check for empty strings', () => {
    expect(capitalize('')).toBe('');
});

test('Reverse string', () => {
    expect(reverseString('abcd')).toBe('dcba');
});

test('Calculator.add(): 20 + 3 = 23', () => {
    expect(calculator.add(20, 3)).toBe(23);
});

test('Calculator.subtract(): 2 - 53 = -51', () => {
    expect(calculator.subtract(2, 53)).toBe(-51);
});

test('Calculator.divide(): 10 / 2 = 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Calculator.multiply(): 100 * 0.5 = 50', () => {
    expect(calculator.multiply(100, 0.5)).toBe(50);
});

test('Caesar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar cipher: case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar cipher: ignores non-alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze array', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
