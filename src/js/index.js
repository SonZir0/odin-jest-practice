export function capitalize(str) {
    if (!str.length) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    divide: function (a, b) {
        return a / b;
    },

    multiply: function (a, b) {
        return a * b;
    },
};

export function caesarCipher(str, key) {
    let cipher = '';
    const messageChars = str.split('');

    messageChars.forEach((character) => {
        let charCode = character.charCodeAt();

        if (charCode >= 65 && charCode <= 90)
            cipher += shiftUpperCase(charCode, key);
        else if (charCode >= 97 && charCode <= 122)
            cipher += shiftLowerCase(charCode, key);
        else cipher += character;
    });
    return cipher;
}

function shiftUpperCase(charCode, key) {
    return String.fromCharCode(65 + ((charCode - 65 + key) % 26));
}

function shiftLowerCase(charCode, key) {
    return String.fromCharCode(97 + ((charCode - 97 + key) % 26));
}

export function analyzeArray(arr) {
    let min = Infinity;
    let max = -Infinity;

    let sum = arr.reduce((sum, current) => {
        if (current < min) min = current;
        if (current > max) max = current;
        return (sum += current);
    }, 0);

    let average = sum / arr.length;
    return { min, max, average, length: arr.length };
}
