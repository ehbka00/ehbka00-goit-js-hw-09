import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
const dataTimePicker = document.querySelector('#datetime-picker');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const timerOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (this.now.getTime() > selectedDates[0].getTime()) {
          alert('Please choose a date in the future');
          return;
      }
      btnStart.disabled = false;
    },
  };

const timer = flatpickr('#datetime-picker', timerOptions);

let baseTimeMS = 0;
let interval;

btnStart.disabled = true;

btnStart.addEventListener('click', ()=>{
  dataTimePicker.disabled = true;
  btnStart.disabled = true;
  baseTimeMS = calculateBaseTimeMS(timer.selectedDates[0]);
  interval = setInterval(() => calculateTimer(), 1000);
});

function calculateTimer() { 
  baseTimeMS -= 1000;

  updateDateTimeTimer(baseTimeMS);

  if (baseTimeMS < 1000) {
    clearInterval(interval);
    dataTimePicker.disabled = false;

    return;
  }  
}

function updateDateTimeTimer(timeInMS) {
  const time = convertMs(timeInMS);
  const formattedDateTime = addLeadingZero(time);
  setTimerData(formattedDateTime);
}

function setTimerData(currentDateTime) {
  days.innerHTML = currentDateTime.days;
  hours.innerHTML = currentDateTime.hours;
  minutes.innerHTML = currentDateTime.minutes;
  seconds.innerHTML = currentDateTime.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(dateTime) {
  const dateTimeWithLeadZero = {};

    for (const key in dateTime) {
      const value = dateTime[key];
      dateTimeWithLeadZero[key] = value < 10 ? '0' + value : value.toString();
    }

    return dateTimeWithLeadZero;
}

function calculateBaseTimeMS(dateTime) {
  const selectedDateTimeMS = new Date(dateTime).getTime();
  const currentDateTimeMS = Date.now();

  return selectedDateTimeMS - currentDateTimeMS;
}

function checkDateExpired(dateTime) {
    const values = Object.values(dateTime);
    return values.every(value => value === '00');
}