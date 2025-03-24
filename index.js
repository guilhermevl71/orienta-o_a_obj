class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente {
    constructor(agencia, saldo) {
        this.agencia = agencia;
        this.saldo = saldo;
    }
    exibirSaldo() {
        console.log(`Seu saldo é de ${this.saldo}`);
    }
    sacar(valor) {
        this.valor = valor;

        if (this.saldo < valor) {
            console.log("Voce não possui saldo suficiente para o saque");
        } else {
            this.saldo -= valor;
            this.exibirSaldo();
        }
    }
    depositar(valor) {
        if(valor <= 0) {
            console.log("O Valor precisa ser maior que 0");
        } else {
            this.saldo += this.deposito;
            this.exibirSaldo();
        }
    }
}

const cliente1 = new Cliente("Joao", 11122233309);
const cliente2 = new Cliente("Maria", 55544477723);
const contacorrente1 = new ContaCorrente(1001, 0);
contacorrente1.exibirSaldo();

contacorrente1.depositar(-500);

contacorrente1.sacar(0);

console.log(`Cliente 1 tem o nome de ${cliente1.nome}`); /* o .nome é o primeiro this.nome, o = nome serve apenas para dizer que o this.nome corresponde ao primeiro paramentro da classe cliente */ 