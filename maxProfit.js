let prices = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let sorted=prices.sort((a,b)=>{return a-b});
    let min=sorted[0];
    let max=sorted[(sorted.length)-1];
    return `Min is ${min}, Max is ${max}, Array is:${sorted}`;
};

console.log("Min and Max and Array is:",maxProfit(prices));