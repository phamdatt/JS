let timerId;
function timer() {
  timerId = setInterval(() => {
    console.log("A")
  }, 1000);
  console.log("Start", timerId);
}

timer();
