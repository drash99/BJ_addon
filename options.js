let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleCheck(event) {


  // Mark the button as selected
  let algoCode = parseInt(event.target.dataset.algo);
  chrome.storage.sync.get(['KnownAlgos'], function(data) {
    var algoset = new Set(data.KnownAlgos);
    if (algoset.has(algoCode)){
      algoset.delete(algoCode)
    }else{
      algoset.add(algoCode)
    }
    chrome.storage.sync.set({KnownAlgos:[...algoset]})
  });
  
}

// Add a button to the page for each supplied color
function constructOptions(algotable) {
  chrome.storage.sync.get("KnownAlgos", (data) => {
    var algoset = new Set(data.KnownAlgos);
    var br = document.createElement("br");
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    table.appendChild(tbody)
    for (const [algoname, value] of Object.entries(algotable)){
      let row = document.createElement('tr')
      
      var nametext = document.createElement('td');
      nametext.innerHTML = algoname
      let checkboxholder = document.createElement('td');
      let checkbox = document.createElement("input");
      
      checkbox.setAttribute("type","checkbox");
      if (algoset.has(value)){
        checkbox.setAttribute("checked", true)

      }
      checkbox.dataset.algo = value
      checkbox.addEventListener("click", handleCheck)
      checkboxholder.appendChild(checkbox)
      row.appendChild(nametext)
      row.appendChild(checkboxholder)
      tbody.append(row)
      //console.log(algoname)
    }
    document.getElementById('algotable').appendChild(table)
    //console.log(algoset);
  
  });
}

// Initialize the page by constructing the color options
import data from './algosko.js'; //(with path)
console.log(data);
console.log(typeof(data))

constructOptions(data);