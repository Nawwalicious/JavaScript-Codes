// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9

function squaresum(values)
{
    sum=0;

    for(let i = 0; i<values.length; i++)
    {
        sum += ( values[i] * values[i] );
    }

    return sum;
}

vals=[1,2,4,5,0];

console.log(squaresum(vals));