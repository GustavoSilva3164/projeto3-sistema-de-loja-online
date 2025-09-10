const Usuario = require("./Usuario");

class Administrador extends Usuario {
  constructor(nome, idade) {
    super(nome, idade);
    this.produtos = [];
  }

  // POLIMORFISMO: sobrescrevendo o método da classe pai
  acessoPainel() {
    return "Acesso ao painel administrativo.";
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  removerProduto(nomeProduto) {
    this.produtos = this.produtos.filter(p => p.nome !== nomeProduto);
  }
}

module.exports = Administrador;