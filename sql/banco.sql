-- ============================================
-- TABELAS
-- ============================================

DROP TABLE IF EXISTS jogos;
DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE jogos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    categoria_id INTEGER NOT NULL,
    CONSTRAINT fk_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
);

-- ============================================
-- CATEGORIAS (10 REGISTROS)
-- ============================================

INSERT INTO categorias (nome) VALUES
('Ação'),
('Aventura'),
('RPG'),
('Corrida'),
('Esporte'),
('Terror'),
('Estratégia'),
('Simulação'),
('Luta'),
('Plataforma');

-- ============================================
-- JOGOS (10 REGISTROS)
-- ============================================

INSERT INTO jogos (nome, preco, categoria_id) VALUES
('GTA V',149.90,1),
('Minecraft',99.90,2),
('The Witcher 3',119.90,3),
('Forza Horizon 5',249.90,4),
('EA Sports FC 26',349.90,5),
('Resident Evil 4',199.90,6),
('Age of Empires IV',159.90,7),
('The Sims 4',89.90,8),
('Mortal Kombat 1',229.90,9),
('Super Mario Bros Wonder',299.90,10);

-- ============================================
-- CONSULTAS PARA TESTE
-- ============================================

SELECT * FROM categorias;

SELECT * FROM jogos;

SELECT
    jogos.nome,
    categorias.nome AS categoria,
    jogos.preco
FROM jogos
INNER JOIN categorias
ON categorias.id = jogos.categoria_id;