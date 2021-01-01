function updateAnalog(hours, minutes, seconds) {
  document.querySelector('.analog .hour').style.transform = `rotate(${hours * 30}deg)`;
  document.querySelector('.analog .minute').style.transform = `rotate(${minutes * 6}deg)`;
  document.querySelector('.analog .second').style.transform = `rotate(${seconds * 6}deg)`;
}
function prepend(num = 0) {
  return num <= 9 ? `0${num}` : num;
}
function updateDigital(hours, minutes, seconds, date = new Date()) {
  document.querySelector('.digital .hour').innerHTML = prepend(hours);
  document.querySelector('.digital .minute').innerHTML = prepend(minutes);
  document.querySelector('.digital .second').innerHTML = prepend(seconds);
  document.querySelector('.item .date').innerHTML = date.toLocaleDateString('en-gb', { day: 'numeric', month: 'short', year: 'numeric' });
}

setClockWithCurrentTime();

function setClockWithCurrentTime() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  updateAnalog(hours, minutes, seconds);
  updateDigital(date.getHours(), minutes, seconds);
}

setInterval(setClockWithCurrentTime, 1000);
