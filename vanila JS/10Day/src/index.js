const clockTitle = document.querySelector(".js-clock");

const Christmas = new Date("December 25, 2022 00:00:00");
const today = new Date();

function untilChristmas() {
  const milliSecond = Christmas - today;

  const second = Math.floor((milliSecond / 1000) % 60);
  const minute = Math.floor((milliSecond / 1000 / 60) % 60);
  const hour = Math.floor(milliSecond / 1000 / 60 / 60) % 24;
  const day = Math.floor(milliSecond / 1000 / 60 / 60 / 24);

  const info = `${day}d ${hour}h ${minute}m ${second}s`;

  clockTitle.innerText = info;
}

function init() {
  untilChristmas();
  setInterval(untilChristmas, 1000);
}

init();
