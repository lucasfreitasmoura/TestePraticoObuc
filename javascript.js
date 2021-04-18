var myjsonObj = '[{"predio":"predio1", "localdetrabalho":"hahaha","remover":"remover1"},{"predio":"predio2","localdetrabalho":"kkkk","remover":"remover2"}]';

var jsObj = JSON.parse(myjsonObj);


var arrLocaisTrabalho = [];


function init(){

	if(sessionStorage.trabalhoRecords){
		arrLocaisTrabalho = JSON.parse(sessionStorage.trabalhoRecords);
		for(var i=0; i<arrLocaisTrabalho.length; i++){

			prepareTableCell(arrLocaisTrabalho[i].predio, arrLocaisTrabalho[i].localdetrabalho);
			
		}
	}

}


function onRegisterPressed(){

	var qualPredio = document.getElementById("predios").value;
	var localTrabalho = document.getElementById("localdetrabalho").value;
	var removerDados = document.getElementById("remover");

	

	var stuObj = {predio:qualPredio, localdetrabalho:localTrabalho, remover:removerDados};
	arrLocaisTrabalho.push(stuObj);


	sessionStorage.trabalhoRecords = JSON.stringify(arrLocaisTrabalho);

	prepareTableCell(qualPredio, localTrabalho, removerDados);
	document.getElementById("predios");
	document.getElementById("localdetrabalho").value ="localdetrabalho";
	document.getElementById("remover");


}


function prepareTableCell(qualPredio, localTrabalho, removerDados){
	var table = document.getElementById("regtable");
	var row = table.insertRow();
	var qualPredioCell = row.insertCell(0);
	var localTrabalhoCell = row.insertCell(1);
	var removerDadosCell = row.insertCell(2);
	




	qualPredioCell.innerHTML = qualPredio;
	localTrabalhoCell.innerHTML = localTrabalho;

}




function limpa(qualPredio, localTrabalho, removerDados){

	


	if(sessionStorage.trabalhoRecords != "")
	{



		var tableRM = document.getElementById("regtable");
		var rowRM = tableRM.deleteRow(rowRM);
		var qualPredioRM = rowRM.deleteRow(qualPredioRM);
		var localTrabalhoRM = rowRM.deleteRow(localTrabalhoRM);
		
		sessionStorage.clear(trabalhoRecords);
		if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();

    	}
	}
}





	 



	













