var maximumProduct = function(nums) {
    nums.sort((a,b)=>{return b-a})
    return nums;
};
function maxProduct(nums) {
    nums.sort((a, b) => b - a);
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
}

let nums = [-4,-3,-1,2,3,4];
console.log(maximumProduct(nums))
console.log(maxProduct(nums));
