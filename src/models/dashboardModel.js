var database = require("../database/config");

function graficoEscolha() {
    var instrucaoSql = `
        SELECT
            cor,
            COUNT(*) AS quantidade,
            ROUND(
                COUNT(*) * 100.0 / (SELECT COUNT(*) FROM usuario),
                2
            ) AS percentual
        FROM usuario
        GROUP BY cor
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucaoSql);
}

function graficoIdentificacao() {
    var instrucaoSql = `
        SELECT
            mais AS cor,
            COUNT(*) AS quantidade,
            ROUND(
                COUNT(*) * 100.0 / (SELECT COUNT(*) FROM formulario),
                2
            ) AS percentual
        FROM formulario
        GROUP BY mais;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoEscolha,
    graficoIdentificacao
};