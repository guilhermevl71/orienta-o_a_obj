

const cliente1 = new Cliente("Joao", 11122233309);
const cliente2 = new Cliente("Maria", 55544477723);
const contacorrente1 = new ContaCorrente(1001, 0);
contacorrente1.exibirSaldo();

console.log(`Cliente 1 tem o nome de ${cliente1.nome}`); /* o .nome é o primeiro this.nome, o = nome serve apenas para dizer que o this.nome corresponde ao primeiro paramentro da classe cliente */ 