const input = require('fs').readFileSync('stdin-input-3', 'utf8')

const lines = input.split('\n')

const [params, ...avistamentos] = lines

const [minutes] = params.split(' ').map(Number)

const ordenedAvistamentos = avistamentos.map((av) => ({
  info: av,
  time: av.split(' ')[0].split(':').map(Number)
}))
  .sort((av1, av2) => {
  
  const [hours1, minutes1] = av1.time
  const [hours2, minutes2] = av2.time
  
  if (hours1 !== hours2) {
     return hours2 < hours1 ? -1 : 1
  } else if (minutes1 !== minutes2) {
    return minutes2 < minutes1 ? 1 : -1
  } else return 0
})
  .filter((av) => {
    const [hour, minute] = av.time
    
    if (hour === 23) {
        return minutes + minute >= 60
    } 

    return minute - minutes <= 0
  })
  .map((av) => av.info.split(' ')[1])
  .join('\n')



console.log(ordenedAvistamentos)