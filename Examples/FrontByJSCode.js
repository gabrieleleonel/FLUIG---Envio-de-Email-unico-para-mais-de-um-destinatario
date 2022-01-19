function sendEmail(){

    var destinatario = "";
    var parametro1 = "";
    //Para obter informação do formulário utilizar hAPI.getCardValue(nomeDoCampo);

    var dataset = ""; //Aqui deve ser inserido o nome do dataset
    
	try {

		var constraints = [];
		constraints.push(DatasetFactory.createConstraint("DESTINATARIO", destinatario, destinatario, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("PARAMETRO1", parametro1, parametro1, ConstraintType.MUST));

		var result = DatasetFactory.getDataset(dataset, null, constraints, null);
		if(result.values[0].Status == true){
			console.log("### servicetask91 - EXECUTADO COM SUCESSO ###");
			return true;
		}else{
			console.log("### servicetask91 - EXECUTADO COM FALHA ###");
			return false;
		}

	} catch (e) {
		console.log(e);
	}
}