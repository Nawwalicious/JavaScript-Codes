var isPalindrome = function(x) {
    let newX=""+x;
    let arr=[...newX];
    let newArr=[...newX];
    newArr.reverse();
    console.log(arr.join("")," & ",newArr.join(""))
    if(arr.join("")==newArr.join("")) {return true}
    else {return false}
};

let x=12321;

console.log(isPalindrome(x))