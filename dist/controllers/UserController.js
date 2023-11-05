"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = exports.CreateUserController = exports.UpdateUserController = exports.FindUserController = exports.FindAllUserController = void 0;
const database_1 = require("./../database");
class FindAllUserController {
    async handle(req, res) {
        const user = await database_1.database.user.findMany();
        return res.json(user);
    }
}
exports.FindAllUserController = FindAllUserController;
class FindUserController {
    async handle(req, res) {
        const { id } = req.params;
        const user = await database_1.database.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.json(user);
    }
}
exports.FindUserController = FindUserController;
class UpdateUserController {
    async handle(req, res) {
        const { name, email } = req.body;
        const { id } = req.params;
        const user = await database_1.database.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name, email
            }
        });
        return res.json({ user });
    }
}
exports.UpdateUserController = UpdateUserController;
class CreateUserController {
    async handle(req, res) {
        const { name, email } = req.body;
        const user = await database_1.database.user.create({
            data: {
                name, email
            }
        });
        return res.json(user);
    }
}
exports.CreateUserController = CreateUserController;
class DeleteUserController {
    async handle(req, res) {
        const { id } = req.params;
        const user = await database_1.database.user.delete({
            where: {
                id: Number(id)
            }
        });
        return res.json("User:: Deletado com sucesso");
    }
}
exports.DeleteUserController = DeleteUserController;
//# sourceMappingURL=UserController.js.map