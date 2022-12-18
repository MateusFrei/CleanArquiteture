import { Produtos_Controller } from "../controller/produtos_Controller";
import { ProdutosRepository } from "../repository/produtos_repository";
import { ProdutosUseCase } from "../use_cases/produtos_usecase";


function criaRepositoryFactory() {
    const repo = new ProdutosRepository();
    return repo;
}


function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new ProdutosUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Produtos_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }