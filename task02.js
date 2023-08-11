const changeString = (str) => {
    let newStr = str;
    newStr = newStr.trim();
    newStr = newStr.toLowerCase();
    newStr = newStr.replace(newStr[0], newStr[0].toUpperCase());
    return newStr;
}

const string = changeString(" привет Мир");
console.log("new string: ", string);