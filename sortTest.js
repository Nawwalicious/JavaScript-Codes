function mergeSort(arr)
{
    if(arr.length<=1){return arr}

    let mid=Math.floor(arr.length / 2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    let sortedLeft=mergeSort(left);
    let sortedRight=mergeSort(right);

    return merge(sortedLeft,sortedRight);
}

function merge(left,right){
    let result=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]<right[rightIndex])
        {
            result.push(left[leftIndex]);
            leftIndex++
        }
        else
        {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}

let test=[1,5,4,3,7,6,8,2,24,56,88]; let test2=[90,64, 34, 25, 12, 22, 11, 90]


let list=[1,5,4,3,7,6,8,2,24,56,88,90,64, 34, 25, 12, 22, 11, 90]

console.log(mergeSort(list));