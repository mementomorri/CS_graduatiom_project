var historyTable = document.getElementById("historyTable");
if (historyTable) {
  for (var i = 0; i < historyTable.rows.length; i++) {
    historyTable.rows[i].onclick = function() {
      appendRow(this);
    };
  }
}

function appendRow(tableRow) {
	var row = historyTable.insertRow(tableRow.rowIndex);
	var name = row.insertCell(0);
	var fDecision = row.insertCell(1);
	var date = row.insertCell(2);
	name.innerHTML = tableRow.childNodes[1].innerHTML;
	fDecision.innerHTML = tableRow.childNodes[3].innerHTML;
	date.innerHTML = tableRow.childNodes[5].innerHTML;
	row.style.cursor = "default";
}
