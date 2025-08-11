var Personagem = /** @class */ (function () {
    function Personagem(nome, energia) {
        this.nome = '';
        this.energia = 0;
        this.ataque = 0;
        this.vida = 0;
        this.defesa = 0;
        this.nome = nome;
        this.energia = energia;
    }
    return Personagem;
}());
var person = new Personagem('Vegeta', 300);
console.log("Personagem: ", person);
