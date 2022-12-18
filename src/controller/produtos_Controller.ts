import { Request, Response } from 'express';
import { IUseCase } from '../use_cases/IUseCase';

class Produtos_Controller {
    produtos_usecase: IUseCase;

    constructor(produtos_usecase: IUseCase) {
        console.log(typeof produtos_usecase)
        console.log(produtos_usecase)
        
        this.produtos_usecase = produtos_usecase;
    }

    listar_produtos(req: Request, resp: Response) {

        const produtos = this.produtos_usecase.recuperaProdutos();
        return resp.status(200).json(produtos)
    }
}

export { Produtos_Controller };
