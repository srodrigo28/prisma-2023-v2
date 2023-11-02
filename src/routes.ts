import { Router } from 'express'

import { /** Todos Methodos User */
        CreateLoginController, DeleteLoginController,
        FindAllLoginController, FindLoginController, UpdateLoginController
} from './controllers/LoginController';

import { /** Todos Methodos User */
        DeleteUserController, CreateUserController, 
        FindUserController, FindAllUserController, UpdateUserController 
} from './controllers/UserController';

/** Todos Methodos Condominio */
import { 
        CreateCondominioController, 
        FindAllCondominioController,
        DeleteCondominioController,
        UpdateCondominioController 
} from './controllers/CondominioController';

const router = Router();

/* TODOS METHODOS LOGIN */
const findAllLogin = new FindAllLoginController
const findLogin = new FindLoginController
const createLogin = new CreateLoginController
const deleteLogin = new DeleteLoginController
const updateLogin = new UpdateLoginController

/* TODOS METHODOS USUARIOS */
const findAllUser = new FindAllUserController
const findUser = new FindUserController
const updateUser = new UpdateUserController
const createUser = new CreateUserController
const deleteUser = new DeleteUserController

/* TODOS METHODOS CONDOMINIO */
const CreateCondominio = new CreateCondominioController
const ListCondominio = new FindAllCondominioController
const Updated = new UpdateCondominioController
const Delete = new DeleteCondominioController

/* ROTAS CONDOMINIO */
router.get('/condominio', ListCondominio.handle)
router.post('/condominio', CreateCondominio.handle)
router.put('/condominio/:id', Updated.handle)
router.delete('/condominio/:id', Delete.handle)

/* ROTAS LOGIN */
router.get('/login', findAllLogin.handle)
router.post('/login', createLogin.handle)
router.put('/login/:id', updateLogin.handle)
router.get('/login/:id', findLogin.handle)
router.delete('/login/:id', deleteLogin.handle)

/* ROTAS USUARIOS */
router.get('/', findAllUser.handle)
router.get('/users', findAllUser.handle)
router.post('/user', createUser.handle)
router.get('/user', findAllUser.handle)
router.get('/user/:id', findUser.handle)
router.put('/user/:id', updateUser.handle)
router.delete('/user/:id', deleteUser.handle)

export { router }