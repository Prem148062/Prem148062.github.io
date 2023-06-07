(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  function setElInnerText(id, text) {
    const el = document.getElementById(id);
    el.innerText = text;
  }
  function countDown() {
    const dateNow = new Date().getTime();
    const newYear = new Date("December 31,2023 23:59:59").getTime();
    const unixTimeLeft = newYear - dateNow;
    setElInnerText("days", Math.floor(unixTimeLeft / DAY));
    setElInnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setElInnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElInnerText("seconds", Math.floor((unixTimeLeft % MINUTE) / SECOND));
  }
  function run() {
    setInterval(() => {
      countDown();
    }, 1000);
  }
  run();
})();
