class Anotacoes {
   
    constructor(titulos, notas){
        this.titulos = titulos;
        this.notas = notas;

        if(typeof this.titulos != "string"){
            console.log("Criação de título - Dados inválidos");
        }

        if(typeof this.notas != "string"){
            console.log("Criação de notas - Dados inválidos");
        }
    }
}
const teste = new Anotacoes(10, "estudante");