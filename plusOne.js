var plusOne = function(digits) {
    let num=digits.join('');
    let temp=(parseInt(num)+1).toString();
    let res=[];
    for(let i=0;i<temp.length;i++)
    {
        res.push(parseInt(temp[i]));
    }

    return res;
};

var plusOneVeryBig = function(digits) {
    let num=digits.join('');
    let temp=(BigInt(num)+1n).toString();
    let res=temp.split('').map(Number);
    return res;
};
console.log(plusOneVeryBig([6,1,4,5,3,9,0,1,9,5,3,9,0,1,9,5,3,9,0,1,9,5]));