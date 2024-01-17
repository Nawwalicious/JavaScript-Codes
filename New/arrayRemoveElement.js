/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [0,1,2,2,3,0,4,2], val = 2
// var removeElement = function(nums, val) {
//     console.log("nums is:",nums);
//     let tempArr=[...nums];
//     console.log("tempArr is:",tempArr);
//     nums.length=0;
//     console.log("nums after cleaning is:",nums);

//     for(let i=0;i<tempArr.length;i++)
//     {
//         if(tempArr[i]!==val)
//         {
//             nums.push(tempArr[i]);
//         }
//     }
//     return nums;
// };

// var removeElement = function(nums, val) {
//     let res=[];
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]!==val)
//         {
//             res.push(nums[i]);
//         }
//     }
//     nums.length=0;
//     for(let k=0;k<res.length;k++)
//     {
//         nums.push(res[k]);
//     }
//     return nums;
// };

var removeElement = function(nums, val) {
    let res=[...nums];
    console.log("res is:",res," res.length is:",res.length);
    nums.length=0;
    for(let i=0;i<res.length;i++)
    {
        if(res[i]!==val)
        {
            nums.push(res[i]);
        }
    }
    return nums;
};

console.log("Function Output:",removeElement(nums,val));