import { IProdutos } from "../domain/Produtos";

interface IRepository {
    read(): Array<IProdutos>;
}

export { IRepository }