var maxProduct = function(nums) {
    let sortedArr=nums.sort((a,b)=>{return a-b});
    let len=nums.length;
    let i=sortedArr[len-1];
    let j=sortedArr[len-2];
    return ((i-1)*(j-1));
};
let nums = [3,7];
console.log("product is:",maxProduct(nums));