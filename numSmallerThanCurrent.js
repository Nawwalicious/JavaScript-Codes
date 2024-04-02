var smallerNumbersThanCurrent = function(nums) {
    let res=[];
    for(let i=0;i<nums.length;i++)
    {
        let temp=[];
        for(let j=0;j<nums.length;j++ && j!=i)
        {
            if(nums[j]<nums[i])
            {
                temp.push(nums[j])
            }
        }
        res.push(temp)
    }
    return count=res.map(num=>num.length)
    // return res
};

let nums = [6,5,4,8]
console.log(smallerNumbersThanCurrent(nums))