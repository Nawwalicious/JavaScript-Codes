var missingNumber = function(nums) {
    nums.sort((a,b)=>{return a-b})
    let temp=[];
    for(let i=0;i<=nums[nums.length-1];i++)
    {
        temp.push(i)
    }
};

let nums = [3,0,1];

console.log("Full array is:",missingNumber(nums));