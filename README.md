# lunchtime
TIS V  

Tutorial: Como iniciar a aplicação back-end.  

**Passo 1**  
Criar um banco de dados com nome 'lunchdb'.  
Comando: 'create database lunchdb';  

**Passo 2**  
Clonar o projeto do GitHub em uma pasta local.  
Comando: 'git clone https://github.com/isabelaedilene/lunchtime.git';  

**Passo 3**  
Com o projeto local, abrir a pasta LunchTime.  
Caminho da pasta: lunchtime/LunchTime  
Dentro dessa pasta estão os arquivos 'package.json' e 'package-lock.json';  
São os arquivos onde ficam as dependências do projeto. Abrir uma janela do terminal  
dentro dessa pasta e executar o comando 'npm install';  
As dependências vão ser instaladas ou verificadas.  

**Passo 4**  
Iniciar o servidor.  
Comando: 'node .\server.js'  
Nesse momento no janela do terminal ao iniciar o servidor vai ser exibido a mensagem 'server started';  
Para fins de teste abrir uma aba no navegador com o endereço 'localhost:9090/'  
Deverá aparecer uma linha com a informação do express: 'Node Express API';  

**Passo 5**  
Abrir uma segunda janela do terminal na mesma pasta para realizar as migrações no banco de dados.      
Comando: 'npx sequelize db:migrate'  
Para fins de verificação, verifique no mysql se a estrutura do banco 'lunchdb' foi criada, se todas as tabelas foram criadas localmente.  

**Passo 6**  
Servidor back-end funcionando.  
Serão complementados os próximos passos para iniciar a aplicação mobile.
 