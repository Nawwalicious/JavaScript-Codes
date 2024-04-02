var mostWordsFound = function(sentences) {
    res=[]
    for(let i=0;i<sentences.length;i++)
    {
        let count=0;
        for(let j=0;j<sentences[i].length;j++)
        {
            if(sentences[i][j]==" ")
            {
                count++;
            }
        }
        res.push(count) // res stores the number of blank spaces. Number of words = number of spaces + 1
    }
    res.sort((a,b)=>{return a-b})
    // return res[res.length -1]+1;  // res stores the number of blank spaces. Number of words = number of spaces + 1
    return res;
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

console.log(mostWordsFound(sentences))