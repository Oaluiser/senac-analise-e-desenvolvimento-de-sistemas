-- CONTEÚDO INICIAL DO BANCO:
 
-- SELECT * FROM funcionario;
-- +----+--------------------+-----------+---------------------+
-- | id | nome               | matricula | email               |
-- +----+--------------------+-----------+---------------------+
-- |  1 | Andre Rieu         | 121       | dede@gmail.com      |
-- |  2 | Arthur Aguiar      | 122       | arthur@gmail.com    |
-- |  3 | Diego Maradona     | 123       | dieguito@gmail.com  |
-- |  4 | Elias Elijah       | 124       | saile@gmail.com     |
-- |  5 | Gabriel (Anjo)     | 125       | gabi@gmail.com      |
-- |  6 | Humberto Gessinger | 126       | bebeto@gmail.com    |
-- |  7 | John Travolta      | 127       | jojo@gmail.com      |
-- |  8 | Mariana Rios       | 128       | anairam@gmail.com   |
-- |  9 | Pedro Scooby       | 129       | pedrinho@gmail.com  |
-- | 10 | Renan Calheiros    | 120       | rere@gmail.com      |
-- | 11 | Ricardo Eletro     | 221       | riri@gmail.com      |
-- | 12 | Richard Gere       | 222       | richinho@gmail.com  |
-- | 13 | Sandro Sotilli     | 223       | sandrinho@gmail.com |
-- | 14 | William Bonner     | 224       | will@gmail.com      |
-- | 15 | Yuri Gagarin       | 225       | yuyu@gmail.com      |
-- +----+--------------------+-----------+---------------------+
-- 15 rows in set (0.00 sec)
 
 
-- SELECT * FROM produto;
-- +----+----------------------------+-------------+
-- | id | descricao                  | qtd_estoque |
-- +----+----------------------------+-------------+
-- |  1 | Maionese viajandona        |          10 |
-- |  2 | Tequila sem alcool         |          20 |
-- |  3 | Tomate verde frito         |          20 |
-- |  4 | Batata doce salgada        |          30 |
-- |  5 | Mouse chocante             |          10 |
-- |  6 | Teclado falante            |          40 |
-- |  7 | Cadeira voadora            |          10 |
-- |  8 | Sombra incolor             |          10 |
-- |  9 | Ratoeira com rato          |          20 |
-- | 10 | Netflix em capsulas        |          20 |
-- | 11 | Palito (sim. Palito mesmo) |          10 |
-- | 12 | Sabonete de chucrute       |          30 |
-- +----+----------------------------+-------------+
-- 12 rows in set (0.00 sec)
 
-- SELECT * FROM venda;
-- +----+----------------+------------+-----+
-- | id | id_funcionario | data_venda | nf  |
-- +----+----------------+------------+-----+
-- |  1 |              2 | 2023-05-06 | 321 |
-- |  2 |              2 | 2023-05-06 | 456 |
-- |  3 |              1 | 2023-05-06 | 457 |
-- |  4 |              3 | 2023-05-06 | 654 |
-- |  5 |              2 | 2023-05-06 | 655 |
-- |  6 |              4 | 2023-05-06 | 789 |
-- |  7 |              8 | 2023-05-06 | 791 |
-- |  8 |              9 | 2023-05-06 | 792 |
-- |  9 |              1 | 2023-05-06 | 879 |
-- | 10 |              5 | 2023-05-06 | 987 |
-- +----+----------------+------------+-----+
-- 10 rows in set (0.00 sec)
 
-- SELECT * FROM item;
-- +----------+------------+-----------+
-- | venda_id | produto_id | qtd_venda |
-- +----------+------------+-----------+
-- |        1 |          5 |         2 |
-- |        2 |          2 |         4 |
-- |        3 |          1 |         1 |
-- |        3 |          3 |         2 |
-- |        4 |          4 |         3 |
-- |        5 |          1 |         6 |
-- |        6 |          2 |         4 |
-- |        7 |          2 |         2 |
-- |        8 |          8 |         6 |
-- |        9 |         10 |         7 |
-- |       10 |          7 |         1 |
-- |       10 |          8 |         8 |
-- +----------+------------+-----------+
-- 12 rows in set (0.00 sec)
  
-- Responda
-- (20%) Crie um gatilho (trigger) para baixar o estoque (qtd_estoque) de um produto quando ele for vendido (registro inserido na tabela item).
-- (20%) Crie um gatilho (trigger) para retornar o estoque (qtd_estoque) de um produto quando a venda dele for excluída (registro excluído da tabela item).
-- (20%) Crie um procedimento (stored procedure) que receba o id de uma venda e retorne (exiba no terminal) a quantidade de itens vendidos nesta venda.
-- (20%) Crie um gatilho (trigger) que ao incluir um funcionário, caso não seja informado um e-mail, cadastre-o com o e-mail “alamaula@gmail.com”.
-- (20%) Crie um procedimento (stored procedure) que receba o número de uma nota fiscal (nf) e retorne (exiba no terminal) a quantidade de itens vendidos nesta venda.
-- (Optativa) Crie um gatilho (trigger) que ao incluir um item de venda (tabela item) crie uma venda para este item (caso ela não exista) com a data da venda (data_venda) igual a data de hoje (use a função now()), com número da nota fiscal (nf) = “000” e o id do funcionário (id_funcionario) = 1.


DROP DATABASE IF EXISTS aula08;
CREATE DATABASE IF NOT EXISTS aula08;
USE aula08;

CREATE TABLE funcionario (
  id        INT AUTO_INCREMENT, 
  nome      VARCHAR(60) NOT NULL, 
  matricula VARCHAR(25) NOT NULL, 
  email     VARCHAR(255), 
  PRIMARY KEY (id)
);

CREATE TABLE produto (
  id          INT AUTO_INCREMENT, 
  descricao   VARCHAR(100) NOT NULL, 
  qtd_estoque INT, 
  PRIMARY KEY (id)
);

CREATE TABLE venda (
  id              INT AUTO_INCREMENT, 
  id_funcionario  INT NOT NULL, 
  data_venda     DATE NOT NULL, 
  nf              VARCHAR(12) NOT NULL, 
  PRIMARY KEY (id), 
  CONSTRAINT fk_venda_funcionario FOREIGN KEY (id_funcionario) REFERENCES funcionario (id)
);

CREATE TABLE item (
  venda_id    INT, 
  produto_id  INT, 
  qtd_venda   INT, 
  PRIMARY KEY (venda_id, produto_id), 
  CONSTRAINT fk_item_venda   FOREIGN KEY (venda_id)   REFERENCES venda (id)   ON DELETE CASCADE ON UPDATE CASCADE, 
  CONSTRAINT fk_item_produto FOREIGN KEY (produto_id) REFERENCES produto (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO funcionario (nome, matricula, email) VALUES ("Andre Rieu", "121", "dede@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Arthur Aguiar", "122", "arthur@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Diego Maradona", "123", "dieguito@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Elias Elijah", "124", "saile@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Gabriel (Anjo)", "125", "gabi@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Humberto Gessinger", "126", "bebeto@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("John Travolta", "127", "jojo@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Mariana Rios", "128", "anairam@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Pedro Scooby", "129", "pedrinho@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Renan Calheiros", "120", "rere@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Ricardo Eletro", "221", "riri@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Richard Gere", "222", "richinho@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Sandro Sotilli", "223", "sandrinho@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("William Bonner", "224", "will@gmail.com");
INSERT INTO funcionario (nome, matricula, email) VALUES ("Yuri Gagarin", "225", "yuyu@gmail.com");

INSERT INTO produto (descricao, qtd_estoque) VALUES("Maionese viajandona", 10);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Tequila sem alcool", 20);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Tomate verde frito", 20);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Batata doce salgada", 30);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Mouse chocante", 10);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Teclado falante", 40);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Cadeira voadora", 10);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Sombra incolor", 10);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Ratoeira com rato", 20);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Netflix em capsulas", 20);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Palito (sim. Palito mesmo)", 10);
INSERT INTO produto (descricao, qtd_estoque) VALUES("Sabonete de chucrute", 30);

INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (2, "2023-05-06", "321");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (2, "2023-05-06", "456");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (1, "2023-05-06", "457");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (3, "2023-05-06", "654");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (2, "2023-05-06", "655");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (4, "2023-05-06", "789");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (8, "2023-05-06", "791");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (9, "2023-05-06", "792");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (1, "2023-05-06", "879");
INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (5, "2023-05-06", "987");

INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (1, 5, 2);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (1, 4, 1);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (2, 2, 4);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (3, 3, 2);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (3, 1, 1);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (4, 4, 3);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (5, 1, 6);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (6, 2, 4);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (7, 2, 2);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (8, 8, 6);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (9, 10, 7);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (10, 8, 8);
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (10, 7, 1);

-- resposta 1
DELIMITER //
CREATE TRIGGER baixar_estoque AFTER INSERT ON item
FOR EACH ROW
BEGIN
  UPDATE produto SET qtd_estoque = qtd_estoque - NEW.qtd_venda WHERE id = NEW.produto_id;
END;
//
DELIMITER ;

-- resposta 2
DELIMITER //
CREATE TRIGGER retornar_estoque AFTER DELETE ON item
FOR EACH ROW
BEGIN
  UPDATE produto SET qtd_estoque = qtd_estoque + OLD.qtd_venda WHERE id = OLD.produto_id;
END;
//
DELIMITER ;

-- resposta 3
DELIMITER //
CREATE PROCEDURE qtd_itens_vendidos (IN id_venda INT)
BEGIN
  DECLARE qtd INT;
  SELECT SUM(qtd_venda) INTO qtd FROM item WHERE venda_id = id_venda;
  SELECT qtd;
END;
//
DELIMITER ;

-- resposta 4
DELIMITER //
CREATE TRIGGER email_default BEFORE INSERT ON funcionario
FOR EACH ROW
BEGIN
  IF NEW.email IS NULL THEN
    SET NEW.email = "alamaula@gmail.com"
  END IF;
END;
//
DELIMITER ;

-- resposta 5
DELIMITER //
CREATE PROCEDURE qtd_itens_vendidos_nf (IN nf VARCHAR(12))
BEGIN
  DECLARE qtd INT;
  SELECT SUM(qtd_venda) INTO qtd FROM item WHERE venda_id = (SELECT id FROM venda WHERE nf = nf);
  SELECT qtd;
END;
//
DELIMITER ;

-- resposta 6
DELIMITER //
CREATE TRIGGER criar_venda AFTER INSERT ON item
FOR EACH ROW
BEGIN
  DECLARE qtd INT;
  SELECT COUNT(*) INTO qtd FROM venda WHERE id = NEW.venda_id;
  IF qtd = 0 THEN
    INSERT INTO venda (id_funcionario, data_venda, nf) VALUES (1, NOW(), "000");
  END IF;
END;
//
DELIMITER ;

-- teste resposta 1
SELECT * FROM produto;
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (1, 5, 2);
SELECT * FROM produto;

-- teste resposta 2
SELECT * FROM produto;
DELETE FROM item WHERE venda_id = 1 AND produto_id = 5;
SELECT * FROM produto;

-- teste resposta 3
CALL qtd_itens_vendidos(1);

-- teste resposta 4
INSERT INTO funcionario (nome, matricula) VALUES ("Fulano", "123");
SELECT * FROM funcionario;

-- teste resposta 5
CALL qtd_itens_vendidos_nf("321");

-- teste resposta 6
SELECT * FROM venda;
INSERT INTO item (venda_id, produto_id, qtd_venda) VALUES (11, 1, 1);
SELECT * FROM venda;