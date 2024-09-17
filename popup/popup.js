let run = document.getElementById("run");
let script = true;
run.onclick = () => {
  console.log(script)
  let min = document.getElementById("minT").value;
  let max = document.getElementById("maxT").value;
  if(script){
    run.className = "btn btn-danger";
    run.innerHTML = "STOP"
  }else{
    run.className = "btn btn-success";
    run.innerHTML = "RUN"
  }
  console.log(min);
  console.log(max);

  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: script ? "run" : "stop" , min, max});
    script = !script
  });
};
