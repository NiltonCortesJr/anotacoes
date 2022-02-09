class Anotacoes {
   
    constructor(titulos, notas){
        this.titulos = titulos;
        this.notas = notas;

        if(typeof this.titulos != "string"){
            throw new Error("Criação de título - Dados inválidos");
        } else{
            console.log("Títulos aceitos com sucesso!");
        }

        if(typeof this.notas != "string"){
            throw new Error("Criação de notas - Dados inválidos");
        } else{
            console.log("Notas aceitas com sucesso!");
        }
    }
}
// const teste = new Anotacoes(10, "estudante");