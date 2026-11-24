//importando model do formulario
var formularioModel = require("../models/formularioModel");

function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo formulario.html
    var geral = req.body.geralServer;
    var mais = req.body.maisServer;
    var menos = req.body.menosServer;
    var fk_usuario = req.body.fk_usuarioServer; //não sei se a fk_usuario entra aqui

    // Faça as validações dos valores
    if (geral == undefined) {
        res.status(400).send("Geral está undefined!");
        return;
    } else if (mais == undefined) {
        res.status(400).send("Mais está undefined!");
        return
    } else if (menos == undefined) {
        res.status(400).send("Menos está undefined!");
        return
    } else if (fk_usuario == undefined) {
    res.status(400).send("O id do usuário logado está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.enviar(geral, mais, menos, fk_usuario) //dúvida sobre a fk_usuario
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

//exportando a função enviar
module.exports = {
    enviar
}