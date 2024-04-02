/**
 * @param {number[]} nums
 * @return {number}
 */
let nums=[1,1,2];
console.log("Nums is:",nums);
// var removeDuplicates = function(nums) {
//     let myRes=new Set();
//     for(let i=0;i<nums.length;i++)
//     {
//         myRes.add(nums[i]);
//     }
//     let res=[...myRes];
//     console.log("Res is:",res);
//     nums.length = 0; // This empties the original array
//     for(let j=0;j<res.length;j++)
//     {
//         nums.push(res[j]); // This fills the original array with the new values
//     }
//     console.log("Nums is:",nums);
//     return nums;
// };

var removeDuplicates = function(nums) {
    let newSet = new Set();
    for(let k=0;k<nums.length;k++)
    {
        newSet.add(nums[k]);
    }
    nums.length=0;
    console.log("Set is:",newSet);
    let temp=[...newSet];
    nums=[...temp];
    return nums;
};

console.log("Nums with duplicates removed:",removeDuplicates(nums));
