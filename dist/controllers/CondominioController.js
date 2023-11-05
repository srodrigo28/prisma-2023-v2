"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCondominioController = exports.UpdateCondominioController = exports.FindCondominioController = exports.FindAllCondominioController = exports.CreateCondominioController = void 0;
const database_1 = require("../database");
class CreateCondominioController {
    async handle(req, res) {
        const { nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor } = req.body;
        const condominio = await database_1.database.condominio.create({
            data: {
                nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor
            }
        });
        return res.json(condominio);
    }
}
exports.CreateCondominioController = CreateCondominioController;
class FindAllCondominioController {
    async handle(req, res) {
        const condominio = await database_1.database.condominio.findMany();
        return res.json(condominio);
    }
}
exports.FindAllCondominioController = FindAllCondominioController;
class FindCondominioController {
    async handle(req, res) {
        const { id } = req.params;
        const condominio = await database_1.database.condominio.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.json(condominio);
    }
}
exports.FindCondominioController = FindCondominioController;
class UpdateCondominioController {
    async handle(req, res) {
        const { nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor } = req.body;
        const { id } = req.params;
        const condominio = await database_1.database.condominio.update({
            where: {
                id: Number(id)
            },
            data: {
                nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor
            }
        });
        return res.json({ condominio });
    }
}
exports.UpdateCondominioController = UpdateCondominioController;
class DeleteCondominioController {
    async handle(req, res) {
        const { id } = req.params;
        const condominio = await database_1.database.condominio.delete({
            where: {
                id: Number(id)
            }
        });
        return res.json("Condominio :: Deletado com sucesso");
    }
}
exports.DeleteCondominioController = DeleteCondominioController;
//# sourceMappingURL=CondominioController.js.map