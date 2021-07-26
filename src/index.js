import { set } from 'lodash';
import './sass/main.scss';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


const timerAll = document.querySelector('#timer-1');

const daysOne = document.querySelector('.days-1');
const daysTwo = document.querySelector('.days-2');

const hoursOne = document.querySelector('.hours-1');
const hoursTwo = document.querySelector('.hours-2');

const minsOne = document.querySelector('.mins-1');
const minsTwo = document.querySelector('.mins-2');

const secsOne = document.querySelector('.secs-1');
const secsTwo = document.querySelector('.secs-2');

const timeOld = new Date('Jul 31, 2021');

setInterval(() => {
  const timeNow = Date.now();
  const timeNew = timeOld - timeNow;
  const { days, hours, mins, secs } = timeClok(timeNew);

  daysOne.textContent = days[0];
  daysTwo.textContent = days[1];

  hoursOne.textContent = hours[0];
  hoursTwo.textContent = hours[1];
  
  minsOne.textContent = mins[0];
  minsTwo.textContent = mins[1];

  secsOne.textContent = secs[0];
  secsTwo.textContent = secs[1];
  
}, 1000);


function pad(value) {
  return String(value).padStart(2, '0');
}

function timeClok(time) {
  const days = pad (Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad (Math.floor((time % (1000 * 60)) / 1000));
  
  return { days, hours, mins, secs };
}


