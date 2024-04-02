var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>{return b-a})
    return nums[k-1]
};

let  nums = [3,2,3,1,2,4,5,5,6], k = 4

console.log(findKthLargest(nums,k));