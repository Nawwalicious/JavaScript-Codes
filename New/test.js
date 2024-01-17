var average = function(salary) {
    salary.sort((a,b)=>{return a-b})
    salary.pop();
    salary.shift();
    // return (salary.reduce((a, b) => a + b, 0)/salary.length).toFixed(5);
    return salary
};

let salary = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];
console.log(average(salary))