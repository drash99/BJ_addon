//if checkbox is changed, add/delete selected algorithm to algoset
// and save it to sync storage.
function handleCheck(event) {

  let algoCode = parseInt(event.target.dataset.algo);
  let gettingitem = browser.storage.sync.get('KnownAlgos')
  gettingitem.then(function (data) {
    var algoset = new Set(data.KnownAlgos);
    if (algoset.has(algoCode)) {
      algoset.delete(algoCode)
    } else {
      algoset.add(algoCode)
    }
    browser.storage.sync.set({ KnownAlgos: [...algoset] })
  }, onError);

}
function onError(error) {
  console.log(`Error: ${error}`);
}
//construct option page with all algosets.
function constructOptions(algotable) {
  let gettingitem = browser.storage.sync.get("KnownAlgos")
  gettingitem.then((data) => {
    var algoset = new Set(data.KnownAlgos);
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')

    table.appendChild(tbody)
    for (const [algoname, value] of Object.entries(algotable)) {
      let row = document.createElement('tr')

      var nametext = document.createElement('td');
      nametext.innerHTML = algoname
      let checkboxholder = document.createElement('td');
      let checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      if (algoset.has(value)) {
        checkbox.setAttribute("checked", true)

      }
      checkbox.dataset.algo = value
      checkbox.addEventListener("click", handleCheck)
      checkboxholder.appendChild(checkbox)
      row.appendChild(nametext)
      row.appendChild(checkboxholder)
      tbody.append(row)
    }
    document.getElementById('algotable').appendChild(table)
    //console.log(algoset);

  }, onError);
}

// get all algoritms and construct option page
import data from './algosko.js'; //(with path)
console.log(data);
console.log(typeof (data))

constructOptions(data);