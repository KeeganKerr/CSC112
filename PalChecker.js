// all elements
let textInput =document.getElementById("text-input")
let checkBtn =document.getElementById("check-btn")
let result =document.getElementById("result")
// starts the function when clicked
checkBtn.addEventListener("click", palindrome);

// The function that runs when the button is clicked
function palindrome(){
    // checks whether a palindrome is input or not, also gets rid of all non alpha numerical characters
    const processedStr = textInput.value.replace(/[\W_]/g, "").toLowerCase();
    let isPalindrome = true;
    for(let i = 0; i<Math.floor(processedStr.length / 2); i++){
        if(processedStr[i] !== processedStr[processedStr.length-1-i]){
            isPalindrome=false;
            break;
        }
    }
// Rules the function follows
    if(isPalindrome){
    result.innerHTML=textInput.value+" is a palindrome!"
}else {
    result.innerHTML= textInput.value+" is not a palindrome"
}

}
