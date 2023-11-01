import { Response, Request } from "express";
import { database } from "../database";

export class FindAllCondominioController{
    async handle(req: Request, res: Response) {
        const condominio = await database.condominio.findMany()
        return res.json(condominio)
    }
}

export class CreateCondominioController{
    async handle(req: Request, res: Response) {
        const { nome, cnpj, estadual, contato, email, cidade, endereco } = req.body;
        const condominio = await database.condominio.create({
            data:{
                nome, cnpj, estadual, contato, email, cidade, endereco
            }
        })
        return res.json(condominio)
    }
}

export class FindCondominioController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const condominio = await database.condominio.findUnique({
            where: {
                id: Number(id)
            }
        })
        return res.json(condominio)
    }
}

export class UpdateCondominioController{
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;
        const { id } = req.params;
        const user = await database.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name, email
            }
        })
        return res.json({user})
    }
}

export class DeleteCondominioController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const user = await database.user.delete({
            where: {
                id: Number(id)
            }
        })
        return res.json("User:: Deletado com sucesso")
    }
}