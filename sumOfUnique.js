var sumOfUnique = function(nums) {
    nums.sort((a,b)=>{return a-b})
    let res=[];
    
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==nums[i-1] || nums[i]==nums[i+1])
        {
            
        }
        else
        {
            res.push(nums[i])
        }
    }
    sum=0;
    res.map(e=>sum+=e);
    return sum;
};

nums = [1,2,3,2]

console.log(sumOfUnique(nums))