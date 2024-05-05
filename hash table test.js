var mergeArrays = function(nums1, nums2) {
    let res=[...nums1,...nums2]
    res.sort();
    let hashTable = {};

    res.forEach(subArray => {
        let key = subArray[0];
        let value = subArray[1];

        if(!hashTable[key]) {
            hashTable[key] = [];
        }
        hashTable[key].push(value);
    });

    console.log(hashTable);
};

nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]

console.log(mergeArrays(nums1,nums2))