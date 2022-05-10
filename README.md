# Processo seletivo MeuGuru

### Descrição do Problema:
Inicialmente, é necessário desenvolver uma aplicação Back-end que irá armazenar, no banco de dados PostgreSQL, cadastros de usuários em uma plataforma. Para que o cadastro do usuário seja feito com sucesso, a aplicação deve enviar ao Back-end o nome, e-mail e senha do usuário.

Além da criação de usuários, deve haver a possibilidade de buscar os usuários cadastrados. A busca deve possuir a funcionalidade de paginação e filtrar os usuários do banco de dados.

Também, a aplicação deve possuir a funcionalidade de alterar e excluir os dados dos usuários.

O banco de dados e aplicação poderão ser implantadas localmente. Deve haver, no entanto, um script para inicializar a aplicação e o banco de dados.

Após a conclusão do Backend, deverá ser realizada uma interface em React.JS onde deve ser possível visualizar os usuários criados em uma tabela, assim como realizar buscas por nome e e-mail.

O código final deve ser apresentado em um repositório público do GitHub.

Ferramentas Obrigatórias:
- Express
- Typescript
- React.JS
- PostgreSQL
- Git

Ferramentas Sugeridas:
- Prisma ORM (Backend)
- Next.js (Frontend)
- GitHub

# Notas do desenvolvedor

A princípio tive dificuldades pois nunca havia utilizado Next.js e Prisma. Porém, com a ajuda das documentações, pude aprender a usá-los enquanto desenvolvia o desafio.

Optei pela utilização do framework React-Bootstrap para dar uma estilização básica no desafio, o que também me ajuda no desenvolvimento e na compreensão de problemas que surgem ao longo dele. Também com React-Bootstrap fiz a paginação, que é feita também pelo lado do server, somente utilizando o front-end para renderização.

Apesar de Prisma e Next.js serem sugeridas e, portanto, opcionais, também optei por sua utilização. Já havia tido sugestões de amigos, conhecidos e profissionais do ramo de que a utilização de ambos, juntamente com Typescript, seria uma das (senão a) melhor stack para desenvolvimento full-stack. Então aproveitei a oportunidade dada para estudar na prática.

Agradeço a oportunidade dada pela MeuGuru e espero que o desafio renda frutos!
