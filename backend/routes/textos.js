module.exports = (application) => {
    application.get("/textos/listar", (request, response) => application.controllers.textos.listar(application, request, response));
    application.post("/textos/salvar", (request, response) => application.controllers.textos.salvar(application, request, response));
    application.put("/textos/atualizar", (request, response) => application.controllers.textos.atualizar(application, request, response));
    application.delete("/textos/excluir", (request, response) => application.controllers.textos.excluir(application, request, response));
}