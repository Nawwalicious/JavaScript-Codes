function groupToSubArray(array) {
    const allArrays = [];
    array.sort((a,b)=>{return a-b})

    for (let i = 0; i < array.length; i++) {
        let found = false;
        for (let j = 0; j < allArrays.length; j++) {
            if (allArrays[j][0] === array[i]) {
                allArrays[j].push(array[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            allArrays.push([array[i]]);
        }
    }

    return allArrays;
}

console.log(groupToSubArray([5,1,5,2,5,3,5,4]))