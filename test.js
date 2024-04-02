var maxFrequencyElements = function(nums) {
    let res=[]
    nums.sort((a,b)=>{return a-b})
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i;j<nums.length;j++)
        {
            if(i!=j && nums[i]==nums[j])
            {
                res.push(nums[i],nums[j])
                res.splice(i,1)
                res.splice(j,1)
            }
        }
    }
    return res.length>0?res.length:nums.length;
};

let nums=[19,19,19,20,19,8,19];

console.log(maxFrequencyElements(nums))