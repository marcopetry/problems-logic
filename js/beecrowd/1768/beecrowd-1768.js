const input = require('fs').readFileSync('stdin-input-4', 'utf8');
const lines = input.split('\n')

const setAttr = ({ normalizedLine, middleValue, limit }) => {
  let str = "";
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < normalizedLine; j++) {
      if (j <= middleValue + i && j >= middleValue - i) {
        str += "*";
      } else if(j <= middleValue) {
        str += " ";
      } else {
        break
      }
    }
    str += "\n";
  }
  return str
}

const getNormalizeLine = (line) => {
  if (line == 2) return 3
  if (line % 2 !== 0) return line
  return Number(line) + 1
}

lines.forEach((line, index) => {
  if (!line) return
  const normalizedLine = getNormalizeLine(line);
  const middleValue = Math.floor(normalizedLine / 2);

  let three = ''

  three = setAttr({
    middleValue,
    normalizedLine,
    limit: middleValue + 1
  })

  three += setAttr({
    middleValue,
    normalizedLine,
    limit: 2
  })

  console.log(three)
});
