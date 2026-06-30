const resultado = document.getElementById("resultado");

document.getElementById("btnCategorias").addEventListener("click", async () => {

    try {

        const resposta = await fetch("http://localhost:3000/categorias");
        const categorias = await resposta.json();

        resultado.innerHTML = "";

        categorias.forEach(categoria => {

            resultado.innerHTML += `
                <div class="card">
                    <h3>${categoria.nome}</h3>
                    <p>ID: ${categoria.id}</p>
                </div>
            `;

        });

    } catch (erro) {

        resultado.innerHTML = "<p>Erro ao carregar categorias.</p>";

    }

});


document.getElementById("btnJogos").addEventListener("click", async () => {

    try {

        const resposta = await fetch("http://localhost:3000/jogos");
        const jogos = await resposta.json();

        resultado.innerHTML = "";

        jogos.forEach(jogo => {

            resultado.innerHTML += `
                <div class="card">
                    <h3>${jogo.nome}</h3>
                    <p>Categoria: ${jogo.categoria}</p>
                    <p>Preço: R$ ${Number(jogo.preco).toFixed(2)}</p>
                </div>
            `;

        });

    } catch (erro) {

        resultado.innerHTML = "<p>Erro ao carregar jogos.</p>";

    }

});


document.getElementById("btnCategoria1").addEventListener("click", async () => {

    try {

        const resposta = await fetch("http://localhost:3000/jogosCategoria/1");
        const jogos = await resposta.json();

        resultado.innerHTML = "";

        jogos.forEach(jogo => {

            resultado.innerHTML += `
                <div class="card">
                    <h3>${jogo.nome}</h3>
                    <p>Preço: R$ ${Number(jogo.preco).toFixed(2)}</p>
                </div>
            `;

        });

    } catch (erro) {

        resultado.innerHTML = "<p>Erro ao carregar jogos da categoria.</p>";

    }

});