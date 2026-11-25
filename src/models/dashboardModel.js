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

function kpiMaisEscolhida() {
    console.log("ACESSEI O KPI MAIS ESCOLHIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \n function kpiMaisEscolhida():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT
            cor,
            COUNT(*) AS quantidade
        FROM usuario
        GROUP BY cor
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function kpiTotalEscolhas() {
    console.log("ACESSEI O KPI TOTAL DE ESCOLHAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \n function kpiTotalEscolhas():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT
            COUNT(*) AS total
        FROM usuario;
    `;
    return database.executar(instrucaoSql);
}

function kpiTotalRespostas() {
    console.log("ACESSEI O KPI TOTAL DE RESPOSTAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \n function kpiTotalRespostas():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT
            COUNT(*) AS total
        FROM formulario;
    `;
    return database.executar(instrucaoSql);
}

function kpiMaiorIdentificacao() {
    console.log("ACESSEI O KPI MAIOR IDENTIFICACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \n function kpiMaiorIdentificacao():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT
            mais AS cor,
            COUNT(*) AS quantidade
        FROM formulario
        GROUP BY mais
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoEscolha,
    graficoIdentificacao,
    kpiMaisEscolhida,
    kpiTotalEscolhas,
    kpiTotalRespostas,
    kpiMaiorIdentificacao
};