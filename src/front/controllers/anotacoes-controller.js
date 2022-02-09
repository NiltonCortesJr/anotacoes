
class AnotacoesController{

    constructor(){
        this.arr = [];
    }
        
    addAnotacao(){
        const titulo = $("#titulo").val();
        const nota = $("#descricaoTarefa").val();

        const novaAnotacao = new Anotacoes(titulo,nota);
    
        this.arr.push(novaAnotacao);
        console.log(this.arr);

        // Apagando os campos de inputs da página index.html
        $("#titulo").val("");
        $("#descricaoTarefa").val("");

    }
}

// criando o Objeto e instanciando a classe
const controller = new AnotacoesController();

// fazendo que o submit nao apague o formulario nem recarregue a página
$("form").submit( (evento) =>{
    evento.preventDefault();

    controller.addAnotacao();

});