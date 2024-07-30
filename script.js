const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const formatNumber = (number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

const displayDate = () => {
  let today = new Date()
  const nextDate = new Date(today.getTime() + 1209599999)

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  daysElement.innerText = formatNumber(Math.floor((nextDate - today) / day))
  hoursElement.innerText = formatNumber(Math.floor(((nextDate - today) % day) / hour))
  minutesElement.innerText = formatNumber(Math.floor(((nextDate - today) % hour) / minute))
  secondsElement.innerText = formatNumber(Math.floor(((nextDate - today) % minute) / second))

  setInterval(() => {
    today = new Date()
    daysElement.innerText = formatNumber(Math.floor((nextDate - today) / day))
    hoursElement.innerText = formatNumber(Math.floor(((nextDate - today) % day) / hour))
    minutesElement.innerText = formatNumber(Math.floor(((nextDate - today) % hour) / minute))
    secondsElement.innerText = formatNumber(Math.floor(((nextDate - today) % minute) / second))
  }, 1000) 
}

displayDate()
