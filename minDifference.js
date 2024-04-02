var minimumAbsDifference = function(arr) {
    // arr.sort((a,b)=>{return b-a})
    arr.sort((a,b)=>{return b-a})
    let minDiff=Math.abs(arr[0]-arr[1]);

    let res=[]
    for(let i=0;i<arr.length;i++)
    {
        if(Math.abs(arr[i]-arr[i+1])<minDiff)
        {
            minDiff=arr[i]-arr[i+1]
        }
    }

    for(let i=0;i<arr.length;i++)
    {
        let temp=[];
        if(Math.abs(arr[i]-arr[i+1])==minDiff)
        {
            temp.push(arr[i],arr[i+1]);
        }
        else
        {
            continue
        }
        res.push(temp.sort((a,b)=>{return a-b}));
    }

    return res.reverse();
};

let arr = [3,8,-10,23,19,-4,-14,27]
console.log(minimumAbsDifference(arr))