import { IProdutos } from "../domain/Produtos";
import { IRepository } from "./IRepository";

class DadosRepository implements IRepository {
    read() : Array<IProdutos> {
        const lista = new Array<IProdutos>();
        return lista;
    }
}

export { DadosRepository }