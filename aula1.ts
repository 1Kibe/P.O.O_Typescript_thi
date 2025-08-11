class Personagem {
  nome: string = '';
  energia: number = 0;
  ataque: number = 0;
  vida: number = 0;
  defesa: number = 0;

  constructor(nome: string, energia:number){
    this.nome = nome;
    this.energia = energia
  }
}

let person: Personagem = new Personagem('Vegeta', 300);
console.log("Personagem: ", person)

