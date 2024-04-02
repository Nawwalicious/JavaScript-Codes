function getAllSubarrays(arr) {
    const res = [];
                      //[1, 2, 1]
                      //[0, 1, 2]  len=1; len<=3; len++
    for (let len = 1; len <= arr.length; len++) {
                    //len=1; len<=3; len++ [1, 2, 3]

        for (let start = 0; start <= arr.length - len; start++) {
               //start = 0; start <= 3 - len; start++ [3, 2, 1, 0]
               console.log("len and start:"+len+" & "+start);
            const temp = [];
            for (let i = start; i < start + len; i++) {
                temp.push(arr[i]);
            }
            res.push(temp);
        }

    }

    return res;
}

const myArray = [1, 2, 1];
console.log(getAllSubarrays(myArray));
