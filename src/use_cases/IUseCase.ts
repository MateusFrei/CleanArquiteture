import { IProdutos } from "../domain/Produtos"

interface IUseCase {
    recuperaProdutos(): IProdutos;
}

export { IUseCase }
