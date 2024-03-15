export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray: number[] = nums1.concat(nums2).sort((num1, num2) => {
    if (num1 < num2) {
      return 1;
    }

    if (num2 < num1) {
      return -1;
    }

    return 0;
  });

  const midIndex = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    return mergedArray[midIndex];
  }
}
