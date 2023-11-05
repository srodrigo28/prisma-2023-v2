"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const LoginController_1 = require("./controllers/LoginController");
const UserController_1 = require("./controllers/UserController");
/** Todos Methodos Condominio */
const CondominioController_1 = require("./controllers/CondominioController");
const router = (0, express_1.Router)();
exports.router = router;
/* TODOS METHODOS LOGIN */
const findAllLogin = new LoginController_1.FindAllLoginController;
const findLogin = new LoginController_1.FindLoginController;
const createLogin = new LoginController_1.CreateLoginController;
const deleteLogin = new LoginController_1.DeleteLoginController;
const updateLogin = new LoginController_1.UpdateLoginController;
/* TODOS METHODOS USUARIOS */
const findAllUser = new UserController_1.FindAllUserController;
const findUser = new UserController_1.FindUserController;
const updateUser = new UserController_1.UpdateUserController;
const createUser = new UserController_1.CreateUserController;
const deleteUser = new UserController_1.DeleteUserController;
/* TODOS METHODOS CONDOMINIO */
const CreateCondominio = new CondominioController_1.CreateCondominioController;
const ListCondominio = new CondominioController_1.FindAllCondominioController;
const Updated = new CondominioController_1.UpdateCondominioController;
const Delete = new CondominioController_1.DeleteCondominioController;
/* ROTAS CONDOMINIO */
router.get('/condominio', ListCondominio.handle);
router.post('/condominio', CreateCondominio.handle);
router.put('/condominio/:id', Updated.handle);
router.delete('/condominio/:id', Delete.handle);
/* ROTAS LOGIN */
router.get('/login', findAllLogin.handle);
router.post('/login', createLogin.handle);
router.put('/login/:id', updateLogin.handle);
router.get('/login/:id', findLogin.handle);
router.delete('/login/:id', deleteLogin.handle);
/* ROTAS USUARIOS */
router.get('/', findAllUser.handle);
router.get('/users', findAllUser.handle);
router.post('/user', createUser.handle);
router.get('/user', findAllUser.handle);
router.get('/user/:id', findUser.handle);
router.put('/user/:id', updateUser.handle);
router.delete('/user/:id', deleteUser.handle);
//# sourceMappingURL=routes.js.map