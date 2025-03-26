import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Joao", 11122233309);
const cliente2 = new Cliente("Maria", 55544477723);
const contacorrente1 = new ContaCorrente(1001, 0, cliente1);
const contacorrente2 = new ContaCorrente(1002, 0, cliente2);

console.log(contacorrente1);