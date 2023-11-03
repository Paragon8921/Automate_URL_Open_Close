'use strict';

const uris = [
  'https://qa-advr.iscs.com/application/AP-00017251',
  'https://qa-advr.iscs.com/application/QT-00018925',
  'https://qa-advr.iscs.com/application/AP-00017397',
  'https://qa-advr.iscs.com/application/QT-00019714',
  'https://qa-advr.iscs.com/application/QT-00017095',
  'https://qa-advr.iscs.com/application/QT-00018924',
  'https://qa-advr.iscs.com/application/QT-00017805',
  'https://qa-advr.iscs.com/application/AP-00012539',
  'https://qa-advr.iscs.com/policy/SBP3400-4642-01',
  'https://qa-advr.iscs.com/application/QT-00014648',
];

const loadDataBtn = document.querySelector('.load_data');
let time = 0;

function timer() {
  time++;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const loadData = async function () {
  const intervalId = setInterval(timer, 1000);
  for (let key of uris) {
    const newWindow = window.open(key, '_blank');
    console.log(`Opened: ${key}`);
    await delay(500);
    newWindow.close();
    console.log(`Closed: ${key}`);
  }
  clearInterval(intervalId);
  console.log(`Time to execute: ${time} seconds`);
};

loadDataBtn.addEventListener('click', loadData);
