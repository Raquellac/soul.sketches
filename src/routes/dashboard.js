var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/graficoEscolha", function (req, res) {
    dashboardController.graficoEscolha(req, res);
})

router.get("/graficoIdentificacao", function (req, res) {
    dashboardController.graficoIdentificacao(req, res);
})

// Rota do KPI 1 - Mais escolhida: retorna a cor mais escolhida no cadastro
router.get("/kpiMaisEscolhida", function (req, res) {
    dashboardController.kpiMaisEscolhida(req, res);
})

// Rota do KPI 2 - Total de escolhas: retorna o total geral de escolhas (total de usuários)
router.get("/kpiTotalEscolhas", function (req, res) {
    dashboardController.kpiTotalEscolhas(req, res);
})

// Rota do KPI 3 - Total de respostas: retorna o total geral de respostas ao formulário
router.get("/kpiTotalRespostas", function (req, res) {
    dashboardController.kpiTotalRespostas(req, res);
})

// Rota do KPI 4 - Maior identificação: retorna a cor com a maior identificação
router.get("/kpiMaiorIdentificacao", function (req, res) {
    dashboardController.kpiMaiorIdentificacao(req, res);
})

module.exports = router;