/*
Output will consist of a list of string values stating whether
the respective member is to be placed in the senior or open category.

senior  ||  open
age>=55 ||
hand>7  ||

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data)
{
    // ...
    output=[]
    for(i=0;i<data.length;i++)
    {
        if (data[i][0] >= 55 && data[i][1] > 7)
        {
            output.push("Senior")
        }
        else
            output.push("Open")
    }
    return output
}

input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]


console.log(openOrSenior(input));