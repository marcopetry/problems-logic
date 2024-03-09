const input = require('fs').readFileSync('stdin-input-1', 'utf8');
const lines = input.split('\n')

const isNumberCousin = (numberToTest, currentDivisor = 2) => {
  if (numberToTest === 1) return false

  if (numberToTest <= currentDivisor) return true
  
  if (numberToTest % currentDivisor === 0) return false

  return isNumberCousin(numberToTest, currentDivisor + 1)
}


lines.forEach((line) => {
  const lineInput = Number(line)
  if (!lineInput) return

  let count = 1

  const members = Array.from({ length: lineInput })
    .map((_, index) => ({
      memberNumber: index + 1,
      previous: null,
      next: null
  }))
  
  for(let i = 0; i < lineInput; i++) {
    members[i].next = i < lineInput - 1 ? members[i + 1] : members[0]
    members[i].previous = i === 0 ? members.at(-1) : members[i - 1]
  }

  let headMember = members[0]
  while (members.length > 1) {
    if (!isNumberCousin(count))
      headMember = headMember.next
      count++
      break
    
    count++
  }


  console.log({ members, lineInput })
})

