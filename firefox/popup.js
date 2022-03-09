
//if open tags is
revealAlgo.addEventListener("click", async () => {
  const revealTags = 'document.getElementById("problem_tags").style.display = "block"';
  browser.tabs.executeScript({
    code: revealTags,
  });
});



//if save is clicked, save value from textbox
setTimeToWait.addEventListener("click", () => {
  let TimeToSave = document.getElementById("TimeToWait").value;
  browser.storage.sync.set({ savedTime: TimeToSave });
  alert('Saved time:' + TimeToSave + ' Seconds');
});


//retrives savedTime from sync and set value of textbox to it
browser.storage.sync.get("savedTime", (data) => {
  document.getElementById("TimeToWait").value = data.savedTime
})