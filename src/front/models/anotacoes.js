class Anotacoes {
   
    constructor(titulos, notas){
        this.titulos = titulos;
        this.notas = notas;

        if(typeof this.titulos != "string"){
            console.log("Criação de título - Dados inválidos");
        } else{
            console.log("Títulos OK");
        }

        if(typeof this.notas != "string"){
            console.log("Criação de notas - Dados inválidos");
        } else{
            console.log("Notas OK");
        }
    }
}
// const teste = new Anotacoes(10, "estudante");