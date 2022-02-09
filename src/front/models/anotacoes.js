class Anotacoes {
   
    constructor(titulos, notas){
        this.titulos = titulos;
        this.notas = notas;

        if(typeof this.titulos != "string"){
<<<<<<< HEAD
            throw new Error("Criação de título - Dados inválidos");
        } else{
            console.log("Títulos aceitos com sucesso!");
        }

        if(typeof this.notas != "string"){
            throw new Error("Criação de notas - Dados inválidos");
        } else{
            console.log("Notas aceitas com sucesso!");
=======
            console.log("Criação de título - Dados inválidos");
        } else{
            console.log("Títulos OK");
        }

        if(typeof this.notas != "string"){
            console.log("Criação de notas - Dados inválidos");
        } else{
            console.log("Notas OK");
>>>>>>> b5ef38f32392e43947ab6ed79f2fea20cdc68111
        }
    }
}
// const teste = new Anotacoes(10, "estudante");