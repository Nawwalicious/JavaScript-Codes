var findLengthOfLCIS = function(nums) {
    let res=[];
    let temp=[];
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]<nums[i+1])
        {
            console.log("Nums[i], nums[i+1] are:",nums[i],nums[i+1])
            temp.push(nums[i],nums[i+1])
        }
        else
        {
            res.push(temp)
            temp=[]
            temp.push(nums[i])
        }
    }
    res.push(temp);
    return res;
};

let nums = [1,3,5,4,7];
console.log(findLengthOfLCIS(nums));