class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  acessoPainel() {
    return "Acesso genérico ao sistema.";
  }
}

module.exports = Usuario;
