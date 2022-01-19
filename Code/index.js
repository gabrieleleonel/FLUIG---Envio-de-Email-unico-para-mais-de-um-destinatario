function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("resposta"), dataset.addColumn("Status");

    //Declarar as váriaveis que serão parametros no e-mail (destinatário, assunto, conteúdo do corpo do e-mail)
    var destinatario = "";
    var parametro1 = "";

    if (constraints != null) {
        if (constraints.length > 0) {
            for (var i = 0; i < constraints.length; i++) {
                var name = constraints[i].fieldName;
                var value = constraints[i].initialValue;

                log.info("### dsCreateFolder - name " + name + " ###");
                log.info("### dsCreateFolder - value " + value + " ###");

                //Deve ser buscado cada variavel declarada acima
                if(name == "DESTINATARIO"){
                	destinatario = value; 
                }
                if(name == "PARAMETRO1"){
                	parametro1 = value; 
                }
            }
        }
    }
        
    try {
        	
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + "",
            serviceCode: "customEmailSender", //Este deve ser o código do serviço criado na aba de serviços do painel de controle do Fluig.
            endpoint: "/api/public/alert/customEmailSender", //Está deve ser o endpoint da api
            method: "post", //o metodo da api
            timeoutService: "100", // o timeout em segundos
            params: {  
            	to: "email@email.com.br;"+destinatario+"", //emails dos destinatarios separados por ";"
                from: "emailpadraofluig@email.com.br", //deve ser o email configurado como padrão do fluig
                subject: "", //assunto do email
                templateId: "template", // o código do template de email anteriormente cadastrado
                dialectId: "pt_BR", //O dialeto do email, cadastrado ao adicionar o template, se não informado o padrão será pt_BR, dialetos possíveis "pt_BR", "en_US", "es"             
                param:{
                    //Aqui são passados os parametros que estão no corpo de email no seguinte formato, a vírgula no final do formato é essencial para adicionar mais de um parametro
                    //"variavel declarada no corpo do email": variavel declarada neste código,
                    "parametro1": parametro1,
                }
            },
        };
        var vo = clientService.invoke(new org.json.JSONObject(data));

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            dataset.addRow(new Array("Retorno está vazio", false));
        } else {
            dataset.addRow(new Array(vo.getResult(), true));
            log.info(">>> result: "+ vo.getResult());
        }
    } catch (err) {
        log.info(">>> Erro:" + err);
        dataset.addRow(new Array(err, false));
    }
    return dataset;
}
