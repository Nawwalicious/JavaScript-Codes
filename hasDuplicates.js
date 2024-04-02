var containsNearbyDuplicate = function(nums, k) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(j!==i && nums[i] == nums[j] && (j-i)<=k)
            {
                return true;
            }
            else
            {
                continue;
            }
        }
    }
    return false;
};

let nums = [1,2,3,1], k = 3
console.log("Has duplicates:",containsNearbyDuplicate(nums,k));