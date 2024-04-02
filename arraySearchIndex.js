var searchInsert = function(nums, target) {
    let newSet=new Set();
    console.log("newSet initially is:",newSet);
    newSet.add(target);
    console.log("First addition",newSet);
    for(let i=0;i<nums.length;i++)
    {
        newSet.add(nums[i]);
    }
    console.log("Set finally",newSet);
    nums.length=0;
    console.log("nums after cleaning is",nums);
    nums=[...newSet].sort((a,b)=>{return a-b});
    console.log("nums after filling back is",nums);
    return nums.indexOf(target);
};
let nums = [1,2,3,4,5,10], target = 2;

console.log("Result is:",searchInsert(nums,target));


//More Optimized code:
// var searchInsert = function(nums, target)
// {
//     for (let i = 0; i < nums.length; i++)
//     {
//         if (nums[i] === target)
//         {
//             return i;
//         } else if (nums[i] > target)
//         {
//             nums.splice(i, 0, target);
//             return i;
//         }
//     }
//     nums.push(target);
//     return nums.length - 1;
// };