const Cliente = require("./class/Cliente");
const Administrador = require("./class/Administrador");
const Produto = require("./class/Produto");
const Pedido = require("./class/Pedido");

const usuarioGenerico = new (require("./class/Usuario"))("Usuário", 18);
console.log(usuarioGenerico.acessoPainel());
console.log("=================================");

const admin = new Administrador("João", 30);
console.log(admin.acessoPainel());

const produto1 = new Produto("Camisa", 50, 10);
const produto2 = new Produto("Tênis", 200, 5);

admin.adicionarProduto(produto1);
admin.adicionarProduto(produto2);

console.log("Produtos cadastrados pelo admin:", admin.produtos);
console.log("=================================");

const cliente = new Cliente("Maria", 20);
console.log(cliente.acessoPainel());

cliente.adicionarProduto(produto1);
cliente.adicionarProduto(produto2);

console.log("Carrinho da cliente:", cliente.carrinho);

const pedido = new Pedido(cliente, cliente.carrinho);
console.log("Valor total do pedido:", pedido.calcularTotal());
