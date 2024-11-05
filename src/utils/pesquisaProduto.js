import dadosProdutos from "../dados/produtos";

const pesquisaProduto = (query) => {
    const resposta = dadosProdutos.filter(
        item => item.description.toLowerCase().includes(query.toLowerCase()
        )
    );

    return resposta
}

export default pesquisaProduto;
