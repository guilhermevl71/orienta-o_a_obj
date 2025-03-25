import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Joao", 11122233309);
const cliente2 = new Cliente("Maria", 55544477723);
const contacorrente1 = new ContaCorrente(1001, 500);
const contacorrente2 = new ContaCorrente(1002, 0);
contacorrente1.cliente = cliente1;
contacorrente2.cliente = cliente2;

contacorrente1.exibirSaldo();
contacorrente2.exibirSaldo();

contacorrente1.transferir(50, contacorrente2);

contacorrente1.exibirSaldo();
contacorrente2.exibirSaldo();