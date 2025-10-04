/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const nums1=[1,2]
const nums2=[3,4]

var findMedianSortedArrays = function(nums1, nums2) {
    

    var marr =  [...nums1, ...nums2];
    marr.sort((a,b) => a - b);

    var i = (marr.length - 1) /2

    if(i == Math.floor((marr.length - 1) /2)) {
        return marr[i]
    }
    i =  Math.floor(i)
    return (marr[i] + marr[i + 1]) / 2

};

console.log(findMedianSortedArrays(nums1,nums2))