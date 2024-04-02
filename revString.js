//Reverse the given string

function reverseString(val)
{
    let temp="";
    for(i=val.length-1; i>=0; i--)
    {
        temp+=val[i];
    }
    return temp;
}

test ="he ADS 93878JHJH &%NHSY&"

console.log(reverseString(test));