export default function reverseInteger(input: number): number {
  const isMinorZero = input < 0;
  const inputAsString = isMinorZero ? input.toString().slice(1) : input.toString();

  const numberReversed = Number(inputAsString.split("").reverse().join(""));

  const limit = Math.pow(2, 31);

  if (numberReversed > limit - 1 || numberReversed < -limit) return 0;

  if (isMinorZero) return -numberReversed;

  return numberReversed;
}
