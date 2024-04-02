var countPairs = function(nums, target) {
    nums.sort((a,b)=>{return a-b})
    // let start=0;end=nums.length-1;
    let res=[]
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length && j!=i;j++)
        {
            if(nums[i]+nums[j]<target)
            {
                res.push([i,j])
            }
        }
    }
    return res.length
};

let nums=[-1,1,2,3,1]; //[-1,1,1,2,3]
console.log(countPairs(nums,2))

