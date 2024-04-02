/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp=[]; cnt=0; let diff=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!=0)
        {
            temp.push(nums[i]);
        }
        else
        {
            cnt++;
        }
    }
    diff=nums.length - temp.length;
    // console.log("Count of 0's:",+cnt,"\nDifference is:",+diff)
    if(cnt<=0)
        {
            temp.push(0)
        }
    for(let j=0;j<diff;j++)
    {
        if(cnt>0)
        {
            temp.push(0);
        }
    }
    nums.length=0;
    nums=[...temp]
    return nums
};

let nums = [0,1,0,3,12];

console.log(moveZeroes(nums))