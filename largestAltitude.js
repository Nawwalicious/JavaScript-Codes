var largestAltitude = function(gain) {
    let res=[0], sum=0;
    for(let i=0;i<gain.length;i++)
    {
        sum+=gain[i]
        res.push(sum)
    }
    res.sort((a,b)=>{return a-b});
    return res[res.length-1]
};

gain = [-5,1,5,0,-7]

console.log(largestAltitude(gain))