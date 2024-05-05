var smallestEqual = function(nums) {
    let res=[];
    for(let i=0;i<nums.length;i++)
    {
        console.log("K is:",+i," & K % 10 = ",i%10," & nums[K] is:",nums[i])
        if(i%10 == nums[i])
        {
            res.push(i)
        }
    }
    return res.length==1?res[0]:-1
};

nums=[1,2,3,4,5,6,7,8,9,0];

console.log(smallestEqual(nums))