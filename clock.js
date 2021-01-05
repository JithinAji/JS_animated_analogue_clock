const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

setInterval(() => {
  let time = new Date();
  changeHand(secondHand, time.getSeconds(), false);
  changeHand(minuteHand, time.getMinutes(), false);
  changeHand(hourHand, time.getHours(), true);
}, 1000);

const changeHand = (hand, currentPos, ifHour) => {
  if (ifHour) hand.style.transform = `rotate(${currentPos * 30}deg)`;
  else hand.style.transform = `rotate(${currentPos * 6}deg)`;
};
