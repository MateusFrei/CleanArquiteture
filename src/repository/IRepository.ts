import { IDados } from "../domain/Produtos";

interface IRepository {
    read(): Array<IDados>;
}

export { IRepository }