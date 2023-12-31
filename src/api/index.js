// variables para guardar los cálculos ya realizados
const dates = []

// variable de los horarios para reservar
const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']

export const fetchAPI = (date) => {
  /* verifico si la fecha ya ha pasado */
  /********************************************/
  // obtengo la fecha de hoy
  const today = new Date()
  // elimino las horas minutos segundos y milisegundos
  today.setHours(0, 0, 0, 0)
  // recibo la fecha y llamo a constructor
  const inputDay = new Date(date)
  // elimino las horas minutos segundos y milisegundos
  inputDay.setHours(0, 0, 0, 0)
  // comparo por días para ver si es un dia anterior y de ser asi envió un array vació
  if (inputDay.getTime() < today.getTime()) return []

  /* verifico si el calculo ya se ha realizado */
  /********************************************/
  const targetDate = new Date(date).toLocaleDateString()
  // verificamos si ya hemos hecho el calculo
  const includesDate = dates.some((dateObj) => dateObj.day === targetDate)
  // retornamos el calculo guardado si ya se ha realizado anteriormente
  if (includesDate) return dates[dates.findIndex(el => el.day === targetDate)].times

  /* genero horarios random */
  /********************************************/

  // numero aleatorio de horas disponibles
  const randomN = (Math.random() * 8).toFixed()
  // funcion para obtener un numero random y utilizarlo como index para agregar horarios
  const random = () => (Math.random() * 7).toFixed()
  const randomTimes = []
  for (let i = 0; i < randomN; i++) {
    const r = random()
    randomTimes.includes(times[r]) ? i = i - 1 : randomTimes.push(times[r])
  }

  // ordenamos los horarios
  const res = randomTimes.sort()

  // guardamos los resultados por si se vuelve a consultar
  dates.push({ day: targetDate, times: res })
  return res
}

export const submitAPI = (formData) => {
  const data = JSON.parse(formData)

  if (typeof data.date !== 'string') return false

  if (typeof data.time !== 'string') return false
  const bol = times.map(el => el === data.time)
  if (bol === false) return false

  if (typeof data.diners !== 'number') return false
  if (data.diners < 1 && data.diners > 10) return false

  if (typeof data.occasion !== 'string') return false
  if (!(data.occasion === 'birthday' || data.occasion === 'anniversary' || data.occasion === 'others')) return false

  if (typeof data.seating !== 'string') return false
  if (!(data.seating === 'standard' || data.seating === 'outside')) return false

  return true
}
