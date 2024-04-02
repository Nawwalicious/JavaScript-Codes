function bubbleSort(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

let test=[1,5,4,3,7,6,8,2,24,56,88,90,64, 34, 25, 12, 22, 11, 90]

console.log(bubbleSort(test))