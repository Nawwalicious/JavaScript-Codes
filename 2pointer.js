let arr=[3,2,4,1,-3,-6,9,3,11];

function test(sum,arr)
{
    arr.sort((a,b)=>{return a-b})
    let start=0, end=arr.length-1;
    while(start<end)
    {
        if(arr[start]+arr[end]==sum)
        {
            return [arr[start],arr[end]]
        }
        else if(arr[start]+arr[end]<sum)
        {
            start+=1;
        }
        else
        {
            end-=1;
        }
    }
    return "No Values Add Up To Sum!!!"
}

console.log(test(3,arr))

console.log("Length of array is:",arr.length)

















function checkTarget(sum,array)
{
    let start=0,end=array.length-1;
    while(start<end)
    {
        if(array[start]+array[end]==sum){return [array[start],array[end]]}
        else if(array[start]+array[end]<sum){start+=1;}
        else{start-=1;}
    }
    return `No items add up to ${sum}`
}

var twoSum = function(nums, target) {
    nums.sort((a,b)=>{return a-b})
    let start=0;end=nums.length-1;
    while(start<end)
    {
        if(nums[start]+nums[end]==target){return [start,end]}
        else if(nums[start]+nums[end]<target){start+=1}
        else{end-=1}
    }
};