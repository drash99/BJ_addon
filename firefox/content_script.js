document.getElementById("problem_tags").style.display = "none";

browser.storage.sync.get("KnownAlgos", (data) => {
  var algoset = new Set(data.KnownAlgos);
  var currentalgos = document.getElementsByClassName("spoiler-list")[0].getElementsByTagName("li");
  //console.log(currentalgos)
  for (var algoRaw of currentalgos){
    //console.log(algoRaw.children[0].href.split('/'))
    var code = parseInt(algoRaw.children[0].href.split('/')[5]);
    //console.log(code);
    if (!algoset.has(code)){
      alert('모르는 알고리즘!');
      break;
    }
  }
  //console.log(algoset);

});

browser.storage.sync.get("savedTime", (data) => {
  let timeToWait = data.savedTime
  console.log('Loaded time: '+ timeToWait);
  setTimeout( () => {
    document.getElementById("problem_tags").style.display = "block";
    //console.log('Revealed');
  }, timeToWait*1000);
});


browser.runtime.onMessage.addListener((message) => {
  if (message.command === "reveal"){
    document.getElementById("problem_tags").style.display = "block";
  }
});