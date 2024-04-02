var countGoodTriplets = function(arr, a, b, c) {
    let res=[];
    let val=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                if( (Math.abs(arr[i]-arr[j])<=a) && (Math.abs(arr[j]-arr[k])<=b) && (Math.abs(arr[i]-arr[k])<=c) )
                {
                    val++;
                }
            }
        }
    }
    return val;
};


arr=[7,3,7,3,12,1,12,2,3], a = 5, b = 8, c = 1

console.log(countGoodTriplets(arr,a,b,c))