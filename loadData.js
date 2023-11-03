'use strict';

let urls = [];

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
  for (let key of urls) {
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

///////////////////////////////////////////////////
///////////////// File Reader ////////////////////
//////////////////////////////////////////////////

let data = document.getElementById('fileToLoad');
let fileOutput = document.getElementById('data-output');

data.addEventListener('change', function () {
  let fileReader = new FileReader();

  fileReader.onload = function () {
    fileOutput.textContent = fileReader.result;
    urls = fileOutput.textContent.split(/\r?\n/);
    console.log(urls);
  };
  fileReader.readAsText(this.files[0]);
});
