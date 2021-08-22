/* Count the number of vowels from the string.
Input : - “I am new to javascript”
Count -
Vowels are (a e i o u and u) */

/* function vowelsInString(str){
    let vowels = ['a', 'e', 'i', 'o','u'];
    let count = 0;
    let arr = str.toLowerCase().split("");
    // console.log(arr);
    for (let i = 0; i < vowels.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] == vowels[i]){
                count++;
            }
        }
    }
    return (console.log(count));
} */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

function vowelsInString(str){
    const vowels = ['a', 'e', 'i', 'o','u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    } 
    return console.log(count);
}
vowelsInString("I am new to javascript");