import { Response, Request } from "express";
import { database } from "../database";



export class CreateCondominioController{
    async handle(req: Request, res: Response) {
        const { nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor } = req.body;
        const condominio = await database.condominio.create({
            data:{
                nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor
            }
        })
        return res.json(condominio)
    }
}

export class FindAllCondominioController{
    async handle(req: Request, res: Response) {
        const condominio = await database.condominio.findMany()
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
        const { nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor } = req.body;
        const { id } = req.params;
        const condominio = await database.condominio.update({
            where: {
                id: Number(id)
            },
            data: {
                nome, cnpj, estadual, contato, email, telefone, cidade, bairro, endereco, data_cadastro, responsavel, valor
            }
        })
        return res.json({condominio})
    }
}

export class DeleteCondominioController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const condominio = await database.condominio.delete({
            where: {
                id: Number(id)
            }
        })
        return res.json("Condominio :: Deletado com sucesso")
    }
}