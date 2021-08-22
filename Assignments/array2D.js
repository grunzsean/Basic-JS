input = [[1,2,3],[33,44,55],[55,77,343]]

/* function highNum (arr){
    let num = 0;
    let newArr = arr.flat();
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i]>num) num = newArr[i];
    }
    return num;
}
console.log(highNum(input)); */

function highNum (arr){
    // let newArr = arr.flat();
    let high = Math.max(...(arr.flat()));
    return console.log(`The highest number from the given 2D array is ${high}`);
}
highNum(input);
