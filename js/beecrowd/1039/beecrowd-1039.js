const input = require('fs').readFileSync('stdin-input-3', 'utf8');
const lines = input.split('\n')

lines.forEach((line) => {
  const [r1, x1, y1, r2, x2, y2] = line.split(' ').map(Number)

  const distanceAB = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

  if (!line) return
  

  if (distanceAB + r2 > r1) {
    console.log('MORTO')
    return
  }

  console.log('RICO')
})