var findNonMinOrMax = function(nums) {
    nums.sort((a,b)=>{return a-b});
    let res=[];
    if(nums.length>=3)
    {
        return nums[nums.length -2]
    }
    return -1;
};

let nums = [1,2,3];

console.log(findNonMinOrMax(nums))