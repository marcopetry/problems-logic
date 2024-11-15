export default function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const obj = {}

    return nums.findIndex((item, i) => {
      const numberRepeatInRange = obj[item] !== undefined && Math.abs(obj[item] - i) <= k
      
      obj[item] = i

      return numberRepeatInRange
    }) > -1
};