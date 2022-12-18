import { IProdutos, Produtos } from '../domain/Produtos'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';

class ProdutosUseCase implements IUseCase {
    repo: IRepository;
    produtos: Produtos;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaProdutos(): IProdutos {
        const produtos = new Produtos('Pera');
        return produtos;
    }
}

export { ProdutosUseCase }