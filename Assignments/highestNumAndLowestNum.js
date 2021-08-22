function highAndLow(arr){
    let high = Math.max(...arr);
    let low = Math.min(...arr);
    return(console.log(`The highest number is ${high} and the lowest number is ${low}.`));

}
input = [34,55,-500,66,77,88,234,5,0,66,88]
highAndLow(input);