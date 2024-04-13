
var calPoints = function(operations) {
    let res=[]

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    for(let i=0;i<operations.length;i++)
    {
        let temp=+operations[i]
        if(isNumber(temp))
        {
            res.push(+temp)
            console.log(res)
        }
        else if(operations[i]=="C")
        {
            res.pop()
            console.log(res)
        }
        else if(operations[i]=="D")
        {
            res.push(res[res.length-1]*2)
            console.log(res)
        }
        else if(operations[i]=="+")
        {
            res.push(res[res.length-1]+res[res.length-2])
            console.log(res)
        }
    }
    return res.reduce((x, y) => x + y, 0);
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))