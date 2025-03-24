function createTable() {
    //Write your code here
	let table = document.querySelector("#myTable");
	const rows =parseInt(prompt("Input number of rows"));
	const columns =parseInt(prompt("Input number of columns"));
	// alert(typeof rows)
		if(isNaN(rows) || isNaN(columns) || rows<=0 || columns<=0){
			alert("Please enter valid positive numbers!");
			return 
		}

	table.innerHTML = ""
	for(let i=0;i<rows;i++){
		let rowsInsert = document.createElement("tr");
		  for(let j=0;j<columns;j++){
          let columnsInsert = document.createElement("td");
			  columnsInsert.innerText =`Row${i} Columns ${j}`;
			  rowsInsert.appendChild(columnsInsert);
		  }
		table.appendChild(rowsInsert)
	}
		
  
}
