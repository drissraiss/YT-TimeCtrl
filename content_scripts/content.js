function conv_time_to_sec(str_time) {
  let tbl_time = str_time.split(":");
  let h = parseInt(tbl_time[0]);
  let m = parseInt(tbl_time[1]);
  let s = parseInt(tbl_time[2]);

  let result = m * 60 + h * 60 ** 60 + s;
  return result;
}
let time_controler
let vd = document.getElementsByClassName("video-stream")[0];

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  let min = msg.min;
  let max = msg.max;

  if (msg.action == "run") {
    min = conv_time_to_sec(min);
    max = conv_time_to_sec(max);

    time_controler = setInterval(() => {
      if (vd.currentTime >= max) {
        vd.currentTime = min;
      }
      if (vd.currentTime < min) {
        vd.currentTime = min;
      }
    }, 100);

    console.clear();
  } else if (msg.action == "stop") {
    clearInterval(time_controler);
  }
});
