class ContaCorrente {
    #saldo;
    
    constructor(agencia, saldo) {
        this.agencia = agencia;
        this.#saldo = saldo;
    }
    exibirSaldo() {
        console.log(`Seu saldo é de ${this.#saldo}`);
    }
    sacar(valor) {
        if (this.#saldo < valor) {
            console.log("Saldo insuficiente");
            return;
        }
        if (valor <= 0) {
            console.log ("O Valor Deve ser maior que 0");
            return;
        }
        this.#saldo -= valor;
        return valor;
    }
    depositar(valor) {
        if(valor <= 0) {
            console.log("Valor do deposito deve ser maior que 0");
            return;
        }
        this.#saldo += valor;
    }
}