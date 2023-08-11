const changeString = (str) => {
    let newStr = str;
    newStr = newStr.trim();
    newStr = newStr.toLowerCase();
    newStr = newStr.replace(newStr[0], newStr[0].toUpperCase());
    return newStr;
}

console.log(changeString("  привет Мир"));