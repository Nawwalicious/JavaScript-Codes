function stringToWords(str) {
    return str.split(" ");
}

// Example usage:
var myString = "Testing 1,2,3 and here we gooo.";
var wordsArray = stringToWords(myString);
console.log("String:",stringToWords(myString))
console.log(wordsArray);
