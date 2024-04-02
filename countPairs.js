var countPairs = function(nums, target) {
    let count=0;
    let res=[]
    nums.sort((a,b)=>{return a-b})  //[-1,1,2,3,1] --> [-1,1,1,2,3], Target=2
    for(let i=0;i<nums.length;i++)
    {
        let temp=[]
        for(let j=0;j<nums.length;j++)
        {
            if(i!=j && nums[i]+nums[j]<target)
            {
                count++;
            }
        }
    }
    return count/2
};

nums = [-1,1,2,3,1], target = 2

console.log(countPairs(nums,target));