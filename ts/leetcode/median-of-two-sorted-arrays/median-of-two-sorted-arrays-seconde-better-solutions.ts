export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray: number[] = [];

  const amountInArrays = nums1.length + nums2.length;

  const isOdd = amountInArrays % 2 !== 0;

  const amountNeedesArray = isOdd ? Math.round(amountInArrays / 2) : amountInArrays / 2 + 1;

  let i = 0;
  let j = 0;

  while (mergedArray.length !== amountNeedesArray) {
    if (nums1[i] <= nums2[j] || typeof nums2[j] === "undefined") {
      mergedArray.push(nums1[i]);
      i += 1;
    } else {
      mergedArray.push(nums2[j]);
      j += 1;
    }
  }

  if (isOdd) {
    return mergedArray[mergedArray.length - 1];
  } else {
    return (mergedArray[mergedArray.length - 1] + mergedArray[mergedArray.length - 2]) / 2;
  }
}
