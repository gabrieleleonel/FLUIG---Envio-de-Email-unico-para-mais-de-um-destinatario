# FLUIG - Envio de email único para mais de um destinatário

Este repositório trata-se de uma instrução de como fazer o envio de um email único para mais de um usuário por meio de um dataset, podendo ser executado pelo javascript do formulário ou até mesmo um serviço no diagrama.

## Configuração

1. Criar o template de email e o cadastrar no FLUIG pelo painel de controle.
2. Criar o serviço no FLUIG pelo painel de controle. <br>
   **Serviço:** REST <br>
   **Nome:** customEmailSender <br>
      ```Este valor é utilizado no código, então deve ter um pouco mais de atenção ```<br>
   **Descrição:** customEmailSender <br>
      ``` Pode ser renomeado como preferir ```<br>
   **Arquivo Swagger:** Não é necessário inserir <br>
   **Domínio:** Url do fluig <br>
   **Tipo de Autenticação:** Fluig API <br>
   
 3. Criar um dataset e inserir o código deste repositório fazendo as devidas alterações.

## Após finalizar a configuração, basta apenas exportar o dataset e o chamar onde precisar passando as constraints se necessário.
