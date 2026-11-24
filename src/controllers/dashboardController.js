var dashboardModel = require("../models/dashboardModel");

function graficoEscolha(req, res) {
    console.log("Recuperando as escolhas por cor da dashboard");

    dashboardModel.graficoEscolha()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as escolhas por cor.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoIdentificacao(req, res) {
    // mesma estrutura de listarEscolhasPorCor, chamando o model de identificacao
    console.log("Recuperando a identificacao por cor da dashboard");

    dashboardModel.graficoIdentificacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a identificacao por cor.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    graficoEscolha,
    graficoIdentificacao
};