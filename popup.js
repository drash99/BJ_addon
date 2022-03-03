

revealAlgo.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: revealTags,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
function revealTags() {
    document.getElementById("problem_tags").style.display = "block";
}

setTimeToWait.addEventListener("click", () => {
    let TimeToSave = document.getElementById("TimeToWait").value;
    chrome.storage.sync.set({ savedTime:TimeToSave });
    alert('Saved time:'+ TimeToSave + ' Seconds');
  });
  
  chrome.storage.sync.get("savedTime", (data) => {
    document.getElementById("TimeToWait").value = data.savedTime
  })