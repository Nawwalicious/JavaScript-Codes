var findMedianSortedArrays = function(nums1, nums2) {
    let merge=[...nums1,...nums2];
    let median=0;
    merge.sort((a,b)=>{return a-b})
    if(merge.length%2==0)
    {
        median+=(1/2)*(merge[(merge.length)/2]+merge[((merge.length)/2)-1]);
    }
    else if(merge.length%2!==0)
    {
        median+=merge[Math.floor((merge.length)/2)];
    }
    return median;
};
let nums1 = [0,0], nums2 = [0,0]
console.log("Median is:",findMedianSortedArrays(nums1,nums2));