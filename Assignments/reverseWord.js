/* Write a program to reverse only words from the sentence 
Input:- “My new learning is javascript”
Output:”yM wen gninrael si tpircsavaj” 
*/

function reverseSentence (sentence) {
    let arr = sentence.split(" ");
    let newArr =[];
    for (let i = 0; i < arr.length; i++){
        let reverseWord = arr[i].split("").reverse().join("");
        newArr.push(reverseWord);
    }
    newSentence = newArr.join(" ");
    return newSentence;

}

reverseSentence("My new learning is javascript");