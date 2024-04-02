var findPeakElement = function(nums) {
    let res=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>nums[i+1] && nums[i]>nums[i-1])
        {
            res= i;
        }
    }
    return res;
};