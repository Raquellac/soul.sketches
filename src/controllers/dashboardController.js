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

// KPI 1 - Mais escolhida: busca a cor mais escolhida no cadastro
function kpiMaisEscolhida(req, res) {
    console.log("Recuperando a cor mais escolhida da dashboard");

    dashboardModel.kpiMaisEscolhida()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a cor mais escolhida.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// KPI 2 - Total de escolhas: busca o total geral de escolhas (total de usuários)
function kpiTotalEscolhas(req, res) {
    console.log("Recuperando o total geral de escolhas da dashboard");

    dashboardModel.kpiTotalEscolhas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar o total geral de escolhas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// KPI 3 - Total de respostas: busca o total geral de respostas ao formulário
function kpiTotalRespostas(req, res) {
    console.log("Recuperando o total geral de respostas da dashboard");

    dashboardModel.kpiTotalRespostas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar o total geral de respostas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// KPI 4 - Maior identificação: busca a cor com a maior identificação
function kpiMaiorIdentificacao(req, res) {
    console.log("Recuperando a cor com a maior identificação da dashboard");

    dashboardModel.kpiMaiorIdentificacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a cor com a maior identificação.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    graficoEscolha,
    graficoIdentificacao,
    kpiMaisEscolhida,
    kpiTotalEscolhas,
    kpiTotalRespostas,
    kpiMaiorIdentificacao
};
