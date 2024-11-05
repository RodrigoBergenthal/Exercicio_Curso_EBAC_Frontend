// Classe Abstrata Animal
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.emitirSom = function() {
    console.log(`${this.nome} faz um som.`);
};

// Classe Cachorro que herda de Animal
function Cachorro(nome) {
    Animal.call(this, nome);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.emitirSom = function() {
    console.log(`${this.nome}: Au au!`);
};

// Classe Gato que herda de Animal
function Gato(nome) {
    Animal.call(this, nome);
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.emitirSom = function() {
    console.log(`${this.nome}: Miau!`);
};

// Classe Vaca que herda de Animal
function Vaca(nome) {
    Animal.call(this, nome);
}

Vaca.prototype = Object.create(Animal.prototype);
Vaca.prototype.constructor = Vaca;

Vaca.prototype.emitirSom = function() {
    console.log(`${this.nome}: Muuu!`);
};

// Instanciando objetos de animais
const cachorro1 = new Cachorro('Rex');
const gato1 = new Gato('Mia');
const vaca1 = new Vaca('Bella');

// Exibindo os sons emitidos pelos animais
cachorro1.emitirSom(); // Saída: Rex: Au au!
gato1.emitirSom();    // Saída: Mia: Miau!
vaca1.emitirSom();    // Saída: Bella: Muuu!