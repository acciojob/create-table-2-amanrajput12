function createTable() {
    //Write your code here
	let table = document.querySelector("#myTable");
	const rows =parseInt(prompt("Enter the no of rows"));
	const columns =parseInt(prompt("Enter the no of columns"));
	// alert(typeof rows)
		if(typeof rows=="number" && typeof columns=="number" && rows>0 && columns>0){
	for(let i=0;i<rows;i++){
		let rowsInsert = document.createElement("tr");
		  for(let j=0;j<columns;j++){
          let columnsInsert = document.createElement("td");
			  columnsInsert.innerText =`row${i+1} columns ${j+1}`;
			  rowsInsert.appendChild(columnsInsert);
		  }
		table.appendChild(rowsInsert)
	}
		}
  
}
