var singleNumber = function(nums) {
    let res=null;
    nums.sort((a,b)=>{return a-b})
    console.log(nums)
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!==nums[i+1] && nums[i]!==nums[i-1])
        {
            res=nums[i];
        }
    }
    return res;
};

let nums = [4,1,2,1,2,5,7,7];
console.log(singleNumber(nums));