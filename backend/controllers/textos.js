const assert = require('assert');

module.exports.listar = async (application, request, response) => {

    try {
        
        assert(request.headers.authorization, 'Erro ao verificar autenticação');

        const data = await application.config.db.index.findMultiple('textos');

        return response.json(data);

    } catch(e) {

        return response.status(403).json({
            "status" : 404,
            "mensagem" : "Acesso Negado"
        });

    }

}
module.exports.salvar = () => {
    return response.json({
        "salvar" : "ddds"
    });
}
module.exports.atualizar = () => {
    return response.json({
        "salvar" : "ddds"
    });
}
module.exports.excluir = () => {
    return response.json({
        "salvar" : "ddds"
    });
}