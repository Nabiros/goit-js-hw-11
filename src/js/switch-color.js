import refs from "../js/refs";
import colors from '../js/colors';

const btnStart = refs.btnStart;
const btnStop = refs.btnStop;

const start = () => {
    btnStart.disabled = true;
    timerId = setInterval(() => {document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)]},1000)
}

const stop = () => {
    btnStart.disabled = false;
    clearInterval(timerId)
}

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStart.addEventListener('click', start)
btnStop.addEventListener('click', stop)