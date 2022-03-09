

revealAlgo.addEventListener("click", async () => {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  
    browser.tabs.executeScript({
      tabId: tab.id,
      function: revealTags,
    });
  });
  

function revealTags() {
    document.getElementById("problem_tags").style.display = "block";
}


//if save is clicked, save value from textbox
setTimeToWait.addEventListener("click", () => {
    let TimeToSave = document.getElementById("TimeToWait").value;
    browser.storage.sync.set({ savedTime:TimeToSave });
    alert('Saved time:'+ TimeToSave + ' Seconds');
  });
  

  //retrives savedTime from sync and set value of textbox to it
  browser.storage.sync.get("savedTime", (data) => {
    document.getElementById("TimeToWait").value = data.savedTime
  })