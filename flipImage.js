var flipAndInvertImage = function(image) {
    let res=[];
    for(let i=0;i<image.length;i++)
    {
        res.push(image[i].reverse())
    }
    for(let i=0;i<image.length;i++)
    {
        for(let j=0;j<image[i].length;j++)
        {
            if(image[i][j]==0){image[i][j]=1}
            else if(image[i][j]==1){image[i][j]=0}
        }
    }
    return res
};

image = [[1,1,0],[1,0,1],[0,0,0]]

console.log(flipAndInvertImage(image));