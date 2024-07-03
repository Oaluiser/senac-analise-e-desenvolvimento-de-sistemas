-- MySQL

/* 00 - Execute o script a seguir. */
DROP DATABASE IF EXISTS simulado;
CREATE DATABASE IF NOT EXISTS simulado;
USE simulado;

CREATE TABLE uf (
 id    INT AUTO_INCREMENT,
 sigla CHAR(2) NOT NULL,
 PRIMARY KEY (id)
);u

CREATE TABLE cidade (
 id      INT AUTO_INCREMENT,
 uf_id   INT NOT NULL,
 nome    VARCHAR(45) NOT NULL,
 capital BOOLEAN,
 PRIMARY KEY (id),
 FOREIGN KEY (uf_id) REFERENCES uf(id)
);

CREATE TABLE atleta (
 id         INT AUTO_INCREMENT,
 cidade_id  INT NOT NULL,
 apelido    VARCHAR(45) NOT NULL,
 altura     DECIMAL(10,2),
 peso       DECIMAL(10,2),
 PRIMARY KEY (id),
 FOREIGN KEY (cidade_id) REFERENCES cidade (id)
);

INSERT INTO uf(sigla) VALUES('RS');
INSERT INTO uf(sigla) VALUES('SP');
INSERT INTO uf(sigla) VALUES('RJ');
INSERT INTO uf(sigla) VALUES('MG');

INSERT INTO cidade(uf_id, nome, capital) VALUES(1, "Porto Alegre", TRUE);
INSERT INTO cidade(uf_id, nome, capital) VALUES(1, "Pelotas", FALSE);
INSERT INTO cidade(uf_id, nome, capital) VALUES(4, "Belo Horizonte", TRUE);
INSERT INTO cidade(uf_id, nome, capital) VALUES(3, "Rio de Janeiro", TRUE);
INSERT INTO cidade(uf_id, nome, capital) VALUES(2, "São Paulo", TRUE);
INSERT INTO cidade(uf_id, nome, capital) VALUES(2, "Campinas", FALSE);

INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(2, "Deusarina Venus de Milo", 1.80, 90.56);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(4, "Maxwelbe Texugo Berta", 2.25, 100.38);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(3, "Naida Navinda Navolta Pereira", 2.05, 111.49);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(1, "Dolores Fuertes de Barriga", 1.60, 78.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(3, "Primorosa Santos", 1.75, 68.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(6, "Berta Rachou", 1.78, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(2, "Hypotenusa Pereira", 1.90, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(5, "Maria Você Me Mata", 1.80, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(1, "Alucinética Honorata", 1.80, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(4, "Cibalena Dorilina Alfajor", 1.80, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(3, "Frankstefferson", 1.80, 80.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(4, "Hericlapiton da Silva", 2.03, 99.28);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(3, "Ulisflávio Valdisnêi", 1.79, 88.78);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(6, "Free William da Silva", 2.00, 95.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(1, "Açafrão Fagundes", 1.68, 88.99);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(2, "Mangelstron Duracel", 1.70, 79.00);
INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(1, "Rotsenaidil Silva", 1.75, 75.08);

/* 01 - Crie um usuário chamado rimidalg com a senha cheesebebum. 
Este usuário poderá acessar as três tabelas SOMENTE com permissão de SELECT, INSERT, UPDATE e DELETE. */

/* 02 - Crie um usuário chamado arnlod com a senha cheesesalada. 
Este usuário poderá somente fazer SELECT no campo apelido da tabela atleta. */

/* 03 - Crie um usuário chamado oicede com a senha ovoebacon. 
Este usuário poderá fazer SELECT e INSERT na tabela atleta. Ele também poderá fazer SELECT na tabela cidade. */

/* 04 - Tire, do usuário oicede, a permissão de INSERT na tabela atleta. */

/* 05 - Crie um gatilho (trigger) que, ao inserir um novo registro na tabela atleta, 
verifique se a altura é maior que 2 metros. Se for, insira o apelido desse atleta em uma tabela chamada atleta_grande. */

/* 06 - Crie um gatilho (trigger) que, ao deletar um registro da tabela cidade, 
insira o nome da cidade deletada em uma tabela chamada logCidade. */

/* 07 - Crie um gatilho (trigger) que, antes de atualizar o peso de um atleta na tabela atleta, 
registre o valor antigo e o novo peso em uma tabela chamada logPesoAtleta. */

/* 08 - Crie uma view chamada viewAtletasCapitais que liste todos os atletas que residem em capitais, 
mostrando o apelido, altura, peso e a cidade onde residem. */

/* 09 - Crie um procedimento armazenado (stored procedure) que insira um novo atleta na tabela atleta. 
O procedimento deve aceitar os parâmetros cidade_id, apelido, altura e peso. */

/* 10 - Faça uma consulta que retorne a sigla dos estados (uf) 
e a quantidade de atletas em cada estado, utilizando INNER JOIN e GROUP BY. */


-- MongoDB
/* 00 - Inicie o servidor MongoDB
Pelo CMD do Windows, terminal de comando, inicie o servidor MongoDB: */

/* 01 - Abra outro terminal e inicie o MongoDB Client (Mongo Shell): */

/* 02 - No Mongo Shell, visualize os bancos de dados existentes: */

/* 03 - No Mongo Shell, crie um banco de dados chamado SENAC: */

/* 04 - No Mongo Shell, crie a coleção Contatos e insira os campos: 
nome, telefone, tipo_contato (pessoal, profissional) e email */

/* 05 - Insira 10 novos contatos na coleção Contatos: */

/* 06 - No Mongo Shell, crie a coleção Cursos e insira o curso ADS, definindo a sigla do curso, o nome, 
o tempo de duração e as unidades curriculares (defina uma array com pelo menos 5 unidades curriculares) */

/* 07 - Faça uma pesquisa que traga todos os contatos do tipo pessoal */

/* 08 - No Mongo Shell, atualize o telefone de um contato específico: */

/* 09 - No Mongo Shell, delete um contato específico: */

/* 10 (desafio) - Faça uma consulta que traga todos os cursos, 
mostrando o nome do curso, sigla, tempo de duração e unidades curriculares */


/* Respostas MYSQL*/

/* 01 */
CREATE USER 'rimidalg'@'localhost' IDENTIFIED BY 'cheesebebum';
GRANT SELECT, INSERT, UPDATE, DELETE ON simulado.* TO 'rimidalg'@'localhost';

/* 02 */
CREATE USER 'arnlod'@'localhost' IDENTIFIED BY 'cheesesalada';
GRANT SELECT (apelido) ON simulado.atleta TO 'arnlod'@'localhost';

/* 03 */
CREATE USER 'oicede'@'localhost' IDENTIFIED BY 'ovoebacon';
GRANT SELECT, INSERT ON simulado.atleta TO 'oicede'@'localhost';
GRANT SELECT ON simulado.cidade TO 'oicede'@'localhost';

/* 04 */
REVOKE INSERT ON simulado.atleta FROM 'oicede'@'localhost';

/* 05 */
DELIMITER //
CREATE TRIGGER atleta_grande
AFTER INSERT ON atleta
FOR EACH ROW
BEGIN
 IF NEW.altura > 2 THEN
  INSERT INTO atleta_grande(apelido) VALUES(NEW.apelido);
 END IF;
END;
//

/* 06 */
DELIMITER //
CREATE TRIGGER logCidade
AFTER DELETE ON cidade
FOR EACH ROW
BEGIN
 INSERT INTO logCidade(nome) VALUES(OLD.nome);
END;
//

/* 07 */
DELIMITER //
CREATE TRIGGER logPesoAtleta
BEFORE UPDATE ON atleta
FOR EACH ROW
BEGIN
 INSERT INTO logPesoAtleta(peso_antigo, peso_novo) VALUES(OLD.peso, NEW.peso);
END;
//

/* 08 */
CREATE VIEW viewAtletasCapitais AS
SELECT a.apelido, a.altura, a.peso, c.nome
FROM atleta a
JOIN cidade c ON a.cidade_id = c.id
WHERE c.capital = TRUE;

/* 09 */
DELIMITER //
CREATE PROCEDURE insereAtleta(
 IN cidade_id INT,
 IN apelido VARCHAR(45),
 IN altura DECIMAL(10,2),
 IN peso DECIMAL(10,2)
)
BEGIN
 INSERT INTO atleta(cidade_id, apelido, altura, peso) VALUES(cidade_id, apelido, altura, peso);
END;
//

/* 10 */
SELECT uf.sigla, COUNT(a.id) AS qtd_atletas
FROM uf
JOIN cidade c ON uf.id = c.uf_id
JOIN atleta a ON c.id = a.cidade_id
GROUP BY uf.sigla;

-- Respostas MongoDB

/* 04 */
use SENAC;
db.createCollection("Contatos");

/* 05 */
db.Contatos.insertMany([
  {nome: "João", telefone: "1234-5678", tipo_contato: "pessoal", email: "mail1@mail.com"},
  {nome: "Maria", telefone: "9876-5432", tipo_contato: "profissional", email: "mail2@mail.com"},
  {nome: "José", telefone: "4567-8901", tipo_contato: "pessoal", email: "mail@mail.com"},
  {nome: "Ana", telefone: "7890-1234", tipo_contato: "profissional", email: "mail@mail.com"},
  {nome: "Carlos", telefone: "3456-7890", tipo_contato: "pessoal", email: "mail@mail.com"},
  {nome: "Mariana", telefone: "6789-0123", tipo_contato: "profissional", email: "mail@mail.com"},
  {nome: "Pedro", telefone: "2345-6789", tipo_contato: "pessoal", email: "mail@mail.com"},
  {nome: "Juliana", telefone: "8901-2345", tipo_contato: "profissional", email: "mail@mail.com"},
  {nome: "Lucas", telefone: "5678-9012", tipo_contato: "pessoal", email: "mail@mail.com"},
  {nome: "Fernanda", telefone: "0123-4567", tipo_contato: "profissional", email: "mail@mail.com"}
]);

/* 06 */
db.createCollection("Cursos");
db.Cursos.insertOne({
  sigla: "ADS",
  nome: "Análise e Desenvolvimento de Sistemas",
  duracao: "2 anos",
  unidades_curriculares: ["Banco de Dados", "Programação", "Engenharia de Software", "Redes de Computadores", "Sistemas Operacionais"]
});

/* 07 */
db.Contatos.find({tipo_contato: "pessoal"});

/* 08 */
db.Contatos.updateOne({nome: "João"}, {$set: {telefone: "9999-9999"}});

/* 09 */
db.Contatos.deleteOne({nome: "Maria"});


