const reverseString = (str) => {
    return str.split("").reverse().join("");
}

const reverse = reverseString("Привет мир");
console.log('reverse string: ', reverse);