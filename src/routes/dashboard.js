var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/graficoEscolha", function (req, res) {
    dashboardController.graficoEscolha(req, res);
})

router.get("/graficoIdentificacao", function (req, res) {
    dashboardController.graficoIdentificacao(req, res);
})

module.exports = router;