interface IProdutos {
    msg: string;
}

class Produtos implements IProdutos {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
    
    get getmsg() {
        return this.msg;
    }
}

export { IProdutos, Produtos }