// Definição da classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para realizar o ataque
  atacar() {
    let ataque;

    // Verifica o tipo de herói e define o ataque correspondente
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 100, 'mago');

heroi1.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
heroi2.atacar(); // Saída: O mago Gandalf atacou usando magia