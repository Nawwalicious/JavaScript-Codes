// var merge = function(nums1, m, nums2, n) {
//     let temp1=[];
//     for(i=0;i<(nums1.length-n);i++)
//     {
//         temp1.push(nums1[i]);
//     }
//     nums1.length=0;
//     nums1=[...temp1,...nums2];
//     nums1.sort((a,b)=>{return a-b});
//     return nums1;
// };

var merge = function(nums1, m, nums2, n) {
    let temp1=[];
    for(i=0;i<(nums1.length-n);i++)
    {
        temp1.push(nums1[i]);
    }
    nums1.length=0;
    for(let i=0;i<m;i++){
        nums1.push(temp1[i])
    }
    for(let i=0;i<n;i++){
        nums1.push(nums2[i])
    }
    nums1.sort((a,b)=>{return a-b});
    return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log("Nums1 is:",merge(nums1,m,nums2,n))