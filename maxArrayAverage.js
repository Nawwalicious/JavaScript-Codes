var findMaxAverage = function(nums, k){
    let result = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let subarray = [];
        for (let j = 0; j < k; j++) {
            subarray.push(nums[i + j]);
        }
        result.push(subarray.reduce((t,n)=>t+n,0));
    }
    result.sort((a,b)=>{return a-b});
    return (result[result.length-1]/k).toFixed(5)
}

let nums = [5], k = 1;
//         [-6,-5,1,3,12,50]

console.log(findMaxAverage(nums,k));