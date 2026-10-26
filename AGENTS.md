# AGENTS.md

## Visão geral

O objetivo do meu projeto é expressar minha valorização da arte, especialmente dos desenhos e das pinturas, incentivando o usuário a enxergá-la de forma mais sensível e a iniciar seu próprio sketchbook (caderno de desenhos), promovendo, assim, um primeiro contato com a prática artística e a construção de um hábito.

## Tecnologias

Tecnologias utilizadas: VS Code, HTML, JavaScript, CSS, API web-data-viz junto do NodeJS (para dados do cadastro, login e dashboard), ChartJs (para gráficos da dashboard), GitHub (como repositório remoto), Git Bash (terminal de comunicação entre o repositório local e remoto).

## Comandos

npm i: Instala as dependências do projeto.
npm start: Inicia o servidor.

## Arquitetura

Diretorio principal front-end - public
Arquivo principal do front-end - index.html
Criar novos arquivo no diretorio - public 
mudar estilização no arquivo - estilo.css
O diretorio public se relaciona diretamente com os demais, principalmente com o src, onde esta o NODE.JS, API web-data-viz e back-end do sistema
O fluxo de dados começa no front-end, fluindo pelo routes, controllers, models e database.

## Padrões de desenvolvimento

-input: ipt_ (ter essa abreviação como base para representar outros valores de campo)
-utilizar o padrão de escrita Snake Case (snake_case)
-funções devem ser nomeadas com verbos
-padrão de commits baseado neste guia: feat (Nova funcionalidade), fix (Correção de erro), docs (Documentação), style (Estilo e formatação), perf (Melhoria de performance), refactor (Refatoração), test (Testes), chore (Manutenção). Exemplo: feat(login): adiciona validação de e-mail. A descrição deve ser curta, objetiva e específica.

## Cuidados e restrições

Nunca altere qualquer coisa relacionada a estrutura do site e a maneira em que estou programando-o, em todas as alterações que você fizer deixe comentarios explicando o que você fez e não faça algo fora do planejado, atenção ao fazer alterações em que o codígo esteja pronto, não esqueça de seguir o padrão que estabeleci para a realização do codígo. Os commits das alterações realizadas devem ser feitas na branch nomeada revisao, separada da main.


## Regra geral: 
Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.