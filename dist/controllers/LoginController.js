"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLoginController = exports.UpdateLoginController = exports.CreateLoginController = exports.FindLoginController = exports.FindAllLoginController = void 0;
const database_1 = require("./../database");
class FindAllLoginController {
    async handle(req, res) {
        const login = await database_1.database.login.findMany();
        return res.json(login);
    }
}
exports.FindAllLoginController = FindAllLoginController;
class FindLoginController {
    async handle(req, res) {
        const { id } = req.params;
        const login = await database_1.database.login.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.json(login);
    }
}
exports.FindLoginController = FindLoginController;
class CreateLoginController {
    async handle(req, res) {
        const { email, name, senha } = req.body;
        const login = await database_1.database.login.create({
            data: {
                email, name, senha
            }
        });
        return res.json(login);
    }
}
exports.CreateLoginController = CreateLoginController;
class UpdateLoginController {
    async handle(req, res) {
        const { email, name, senha } = req.body;
        const { id } = req.params;
        const login = await database_1.database.login.update({
            where: {
                id: Number(id)
            },
            data: {
                email, name, senha
            }
        });
        return res.json({ login });
    }
}
exports.UpdateLoginController = UpdateLoginController;
class DeleteLoginController {
    async handle(req, res) {
        const { id } = req.params;
        const login = await database_1.database.login.delete({
            where: {
                id: Number(id)
            }
        });
        return res.json("Login:: Deletado com sucesso");
    }
}
exports.DeleteLoginController = DeleteLoginController;
//# sourceMappingURL=LoginController.js.map