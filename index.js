class Cliente {
    constructor(nome, cpf, agencia, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    exibirsaldo() {
        console.log(`O Saldo do ${this.nome} é de R$ ${this.saldo}`)
    }
}

const cliente1 = new Cliente("Joao", 11122233309, 1001, 0);
const cliente2 = new Cliente("Maria", 55544477723, 1001, 0)

console.log(`Cliente 1 tem o nome de ${cliente1.nome}`); /* o .nome é o primeiro this.nome, o = nome serve apenas para dizer que o this.nome corresponde ao primeiro paramentro da classe cliente */ 
cliente1.exibirsaldo();