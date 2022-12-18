import express, { Router } from "express";

import { criaControllerFactory } from "./infra/factories";

const app = express();

const route = Router();
const produtoController = criaControllerFactory();

route.get("/produto", (req: Request, res: Response) => { produtoController.listar_produto(req, res) });


app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log('conectado em 3000');
})


