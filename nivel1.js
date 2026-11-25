// 1
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"]
let produto = ["Teclado Mecânico", "Mouse Gamer"]
let fila = ["Marcos", "Juliana", "Roberto"]
let acao = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] 
let amoxerifado = ["Camiseta", "Calça", "Tênis", "Boné"]
let festa = ["Lucas", "Mariana", "Thiago", "Beatriz"]


function fnExibirChamada() {
    console.log(alunos[0]);
    console.log(alunos[4]);
    console.log(alunos.length);
    
}

// 2 

function fnAdicionarProduto(lista, novoProduto){
    if (lista == "produto"){
        produto.push(novoProduto)
        console.log(produto);
        
        
    }else{
        console.log("Adicione um produto na lista");
        
    }
}

// 3

function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente)
    console.log("A veia(o) foi adicionada(o)");
    console.log(fila);
}

// 4

function fnChamarProximo(fila){
    console.log("Foi Chamada");
    console.log(fila[0]);
    
    fila.shift()
    console.log(fila);

    
}

// 5

function fnDesfazerAcao(acao) {
    console.log("Ultima ação foi realizada");
    acao.pop(acao)
    
    console.log(acao);
    
    
}

// 6

function fnVerificarEstoque (amoxerifado){
    console.log("Total de itens no almoxerifado");
    console.log(amoxerifado.length);
    
}
// 7

function fnVerificarLista(festa) {
    console.log(festa.includes("Thiago"));
    console.log(festa.includes("Ana"));
    
}

function name(params) {
    
}










s















fnExibirChamada()
fnAdicionarProduto("produto", "HeadsetUSB")
fnEncaixarPrioridade(fila, "Dona Clara")
fnChamarProximo(fila)
fnDesfazerAcao(acao)
fnVerificarEstoque (amoxerifado)
fnVerificarLista(festa)