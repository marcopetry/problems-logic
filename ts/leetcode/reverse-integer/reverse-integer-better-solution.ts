export default function reverseInteger(input: number): number {
  const isMinorZero = input < 0;
  const inputAsString = isMinorZero ? input.toString().slice(1) : input.toString();

  let numberReversed = 0;

  for (let i = 0; i < inputAsString.length; i++) {
    numberReversed =
      numberReversed + Number(inputAsString[inputAsString.length - 1 - i]) * Math.pow(10, inputAsString.length - 1 - i);
  }

  const limit = Math.pow(2, 31);

  if (numberReversed > limit - 1 || numberReversed < -limit) return 0;

  if (isMinorZero) return -numberReversed;

  return numberReversed;
}
