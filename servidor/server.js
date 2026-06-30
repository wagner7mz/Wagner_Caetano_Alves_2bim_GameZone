const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Rota 1 - Categorias
app.get("/categorias", async (req, res) => {
    try {
        const resultado = await db.query(
            "SELECT * FROM categorias ORDER BY id"
        );

        res.json(resultado.rows);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar categorias." });
    }
});

// Rota 2 - Jogos
app.get("/jogos", async (req, res) => {
    try {
        const resultado = await db.query(`
            SELECT
                jogos.id,
                jogos.nome,
                jogos.preco,
                categorias.nome AS categoria
            FROM jogos
            INNER JOIN categorias
            ON categorias.id = jogos.categoria_id
            ORDER BY jogos.id
        `);

        res.json(resultado.rows);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar jogos." });
    }
});

// Rota 3 - Jogos por categoria
app.get("/jogosCategoria/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const resultado = await db.query(
            "SELECT * FROM jogos WHERE categoria_id = $1 ORDER BY nome",
            [id]
        );

        res.json(resultado.rows);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: "Erro ao buscar jogos da categoria."
        });

    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});