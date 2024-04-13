/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let boundary=0;
    count=0;
    track=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>0)
        {
            track+=nums[i]
            if(track==boundary){count+=1}
        }
        else if(nums[i]<0)
        {
            track-=Math.abs(nums[i])
            if(track==boundary){count+=1}
        }
    }
    return count;
};

console.log(returnToBoundaryCount([3,2,-3,-4]))