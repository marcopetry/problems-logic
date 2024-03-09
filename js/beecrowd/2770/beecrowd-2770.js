const input = require('fs').readFileSync('stdin-input-2', 'utf8');
const lines = input.split('\n')

let maiorDimensaoDaPlaca, menorDimensaoDaPlaca
lines.forEach((line) => {
  if (!line) return
  
  const [inputX, inputY, inputQtdPedidos] = line.split(' ')

  const maiorDimensao = Math.max(Number(inputX), Number(inputY))
  const menorDimensao = Math.min(Number(inputX), Number(inputY))

  if (inputQtdPedidos) {
    maiorDimensaoDaPlaca = maiorDimensao
    menorDimensaoDaPlaca = menorDimensao
    return
  }

  const maiorDimensaoPedido = maiorDimensao
  const menorDimensaoPedido = menorDimensao

  if (maiorDimensaoPedido > maiorDimensaoDaPlaca || menorDimensaoPedido > menorDimensaoDaPlaca) {
    console.log('Nao')
  } else {
    console.log('Sim')
  }
});
