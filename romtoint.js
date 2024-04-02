var romanToInt = function(s) {
    let I=1,V=5,X=10,L=50,C=100,D=500,M=1000;
    let res=0;
    let arr=[...s]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]=="I" && arr[i+1]=="V" || arr[i]=="I" && arr[i+1]=="X" || arr[i]=="X" && arr[i+1]=="L" || arr[i]=="X" && arr[i+1]=="C" || arr[i]=="C" && arr[i+1]=="D" || arr[i]=="C" && arr[i+1]=="M")
        {
            res-=arr[i].toUpperCase();
        }
        else
        {
            res+=arr[i].toUpperCase();
        }
    }
    return res;
};

let s = "MCMXCIV";

console.log(romanToInt(s))