# ihhah-sms

## Descrição
O ihhah-sms é um projeto desenvolvido em Java com Spring Boot e React, destinado a [descrever a funcionalidade principal do projeto, se houver].

## Tecnologias
- Java 23
- Spring Boot 3.3.4
- React
- Node 22.9.0

## Premissas

A primeira coisa que pensei em fazer foi mapear as possíveis entidades que seriam utilizadas no backend. Após o mapeamento, minha ideia foi criar uma `BaseEntity`, `BaseController`, `BaseService` e os repositórios das classes. Dessa forma, eu teria acesso fácil e rápido às principais chamadas do sistema, sem precisar escrever as mesmas rotinas de CRUD repetidamente.

Com isso feito, fui para o front-end, onde escolhi o Ant Design como biblioteca visual. Na teoria, foi uma boa escolha, tendo em vista que é bem bonito e completo. Porém, na prática, enfrentei algumas dificuldades, pois não sabia como utilizar alguns componentes, o que me obrigou a aprender na hora. No front, também criei os serviços de comunicação com o backend, seguindo o escopo de CRUD. Nessa etapa, já tinha acesso à busca individual, busca de listas, criação, deleção e atualização de todas as classes criadas no backend.

Parte do meu problema nessa prova técnica foi que, ao ler os requisitos, pensei muito grande, o que acabou me atrasando e levando a algumas decisões erradas. Por falta de um planejamento melhor, decidi fazer uma única tela que seria a de clientes. Nela, teria uma lista com todos os clientes, suas informações básicas e as ações solicitadas. Na edição de plano, é possível visualizar os dados do cliente e alterar o plano. Também existe um botão para adicionar crédito na tabela e outro para alterar o limite. Sobre a alteração de limite, quase não implementei essa feature, não por dificuldade, mas porque achei que, no negócio, não faria tanto sentido para mim, o limite deveria ser vinculado ao plano e ser um valor fixo, com cada plano tendo um limite específico. Assim, os cinco pontos de operações do backoffice foram atendidos.

Outro ponto que me fez perder tempo foi a seguinte informação nos requisitos: "Nesse sistema, cada cliente precisa ser previamente cadastrado". Isso poderia ter me poupado tempo ao não precisar me preocupar em fazer uma tela de cadastro para esses clientes. Quanto à rotina de mensagens, não consegui implementar minha ideia inicial, que era ter um botão para simular o disparo de uma mensagem, completando o fluxo (verificar plano e saldo/limite e persistir a mensagem no banco). O que fiz foi apenas implementar a rotina no backend, deixando o endpoint pronto, fazendo as validações e realizando alguns testes unitários e mocks para simular o envio dessas mensagens. No entanto, essa funcionalidade não ficou visível, exceto nos testes. Caso seja necessário executar os testes, é só entrar na pasta do backend e rodar o código: `./gradlew :test --tests "prova.tecnica.service.MensagemServiceTest"`.

Outra coisa que configurei no projeto foi o Liquibase. Para o projeto, foi ótimo em termos de segurança e manutenção do banco, mas me fez gastar um tempo que poderia ter sido utilizado para fazer mais testes.

Em caso de dúvidas, estarei à disposição. Desde já, agradeço pela oportunidade.


## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/willgkm/prova-tecnica-ihhah

2. Navegue até o diretório do projeto:e
   ```bash
   cd prova-tecnica-ihhah

## Uso

### Rodando o Banco de dados 

1. Acesse o diretório do backend:
   ```bash
   cd backend

2. Execute o docker-compose:
   ```bash
    docker-compose -f docker-compose-db.yml -d 

- **Pgadmin URL :**  http://localhost:5050/login?next=/
usuario: admin@admin.com
senha: admin
   


### Rodando o Backend

1. Acesse o diretório do backend:
   ```bash
   cd backend

2. Execute o projeto:
   ```bash
    ./gredlew :bootRun

- **Backend URL :**  http://localhost:8080/
- **Documentacao do swagger  :**  http://localhost:8080/swagger-ui/index.html

### Rodando o Frontend

1. Acesse o diretório do frontend:
   ```bash
   cd frontend/ihhah-sms

2. Instale as dependencias:
   ```bash
    npm i  

2. Execute o projeto:
   ```bash
    npm run dev 

 - **Backend URL :**  http://localhost:5173/
  



