// var arithmeticTriplets = function(nums, diff) {
//     let res=[];
//     for(let i=0;i<nums.length-2;i++)
//     {
//         for(let j=i+1;j<nums.length-1;j++)
//         {
//             if(nums[j]-nums[i]==diff)
//             {
//                 for(let k=j+1;k<nums.length;k++)
//                 {
//                     if(nums[k]-nums[j]==diff)
//                     {
//                         res.push(i,j,k);
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// };

var arithmeticTriplets = function(nums, diff) {
    let res =[]
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        let temp=[]
        for (let j = i + 1; j < n - 1; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[k] - nums[j] === diff) {
                        temp.push(i, j, k);
                    }
                }
            }
        }
        res.push(temp)
    }
    return res;
};


let nums = [0,1,4,6,7,10], diff = 3
 //Indices: 0,1,2,3,4,5

console.log("Results for array:",arithmeticTriplets(nums,diff))