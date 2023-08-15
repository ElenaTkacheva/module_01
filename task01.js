const generateArray = (length) => {
    const newArr = [...Array(length)];
    
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = Math.floor(Math.random() * 100) + 1;
    }
    return newArr;
}

console.log(generateArray(10));
