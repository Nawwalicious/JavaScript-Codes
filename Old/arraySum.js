// Return sum of elements of array elements

function arraySum(values)
{
    let sum=0;
    for(i=(values.length)-1; i>=0; i--)
    {
        sum+=values[i];
    }
    return sum;
}

vals = [1,3,5,2,0]
console.log("Sum of array is:"+arraySum(vals));