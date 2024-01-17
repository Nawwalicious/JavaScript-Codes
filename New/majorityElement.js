var majorityElement = function(nums) {
    nums.sort((a,b)=>{return a-b});
    let res=[];
    let residual=[];
    let num=0;
    for(let i=1;i<nums.length;i++)
    {
        if(i>0 && nums[i]==nums[i-1])
        {
            residual.push(nums[i])
        }
        else
        {
            res.push(residual);
            residual=[];
        }
    }
    res.push(residual);


    for(let k=0;k<res.length-1;k++)
    {
        if(res[k].length>res[k+1].length)
        {
            num=res[k][0];
        }
    }
    return num;
};

let nums = [2,2,1,1,1,2,2]; //[1,1,1,2,2,2,2]
                            //[0,1,2,3,4,5,6]

console.log("Array is:",majorityElement(nums));