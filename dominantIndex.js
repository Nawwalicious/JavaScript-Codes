var dominantIndex = function(nums) {
    let res=0;
    sortedNums=[...nums].sort((a,b)=>{return a-b})
    if(sortedNums[sortedNums.length-1]>=2*sortedNums[sortedNums.length-2])
    {
        res+=sortedNums[sortedNums.length-1];
    }
    else
    {
        res+=-1;
    }
    return nums.indexOf(res)
};

let nums = [3,1,0,4,9];
console.log(dominantIndex(nums))