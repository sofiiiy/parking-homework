const enter = document.querySelector(".enter");
const exit = document.querySelector(".exit");
const payment = document.querySelector(".payment");
let enterTime;
let exitTime;
enter.addEventListener("click", () => {
  enterTime = new Date();
  alert("The car entered");
  return enterTime;
});
exit.addEventListener("click", () => {
  alert("The car exited");
  exitTime = new Date();
  let totalyMinutes = Math.abs(
    (exitTime.getHours() * 60 -
      exitTime.getMinutes()) -
      (enterTime.getHours() * 60 - enterTime.getMinutes())
  );
  let hours = Math.floor(totalyMinutes / 60);
  let minutes = totalyMinutes % 60;
  alert(
    `You have been in parking station ${hours} hours and ${minutes} minutes`
  );

  if (minutes > 0) {
    hours = hours + 1;
  }
  if (hours !== 0 || minutes !== 0) {
    paymentt = hours * 4 + 1;
  }

  let money = hours * 4 + 1;
  let paymentt = `You will be charged ${money} dollars`;
  payment.innerHTML = paymentt;
});
