export default function twoSum(nums: number[], target: number): number[] {
  const indexedNums = nums.map((value, index) => ({ value, index }));

  indexedNums.sort((a, b) => a.value - b.value);

  let res: number[] = [];

  let i = 0,
    j = indexedNums.length - 1;

  while (true) {
    if (indexedNums[i].value + indexedNums[j].value === target) {
      res.push(indexedNums[i].index);
      res.push(indexedNums[j].index);
      break;
    }

    if (indexedNums[i].value + indexedNums[j].value < target) {
      i++;
    } else {
      j--;
    }
  }

  return res;
}
