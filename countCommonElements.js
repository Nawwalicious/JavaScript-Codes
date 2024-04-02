/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let count1=0,count2=0;
    let newNums1=[...set1]
    let newNums2=[...set2]

    for(let i=0;i<newNums1.length;i++)
    {
        for(let j=0;j<nums2.length;j++)
        {
            if(newNums1[i]==nums2[j])
            {
                count1+=1;
            }
        }
    }

    for(let i=0;i<newNums2.length;i++)
    {
        for(let j=0;j<nums1.length;j++)
        {
            if(newNums2[i]==nums1[j])
            {
                count2+=1;
            }
        }
    }
    return [count2,count1]
};