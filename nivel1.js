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
    acao.pop()
    
    console.log(acao);
    
    
}

// 6

function fnVerificarEstoque (amoxerifado){
    console.log("Total de itens no almoxerifado");
    console.log(amoxerifado.length);
    
}
// 7

function fnVerificarLista(festa, nome) {

    if (festa.includes(nome) == true){
        console.log("Você pode entrar");
        
    }else{
        console.log("Você não pode entrar");
        
    }

}
// 8

let corredores = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

function fnConsultarCorredor(corredores, item) {
    if (corredores.includes(item) == true){
        let ondeItem = corredores.indexOf(item) + 1
        console.log(`O ${item} está no corredor ${ondeItem}`);
        
    }else{
        console.log(`Produto ${item} não foi encontrado!`);
        
    }
    
}
// 9

let basePreco = [15.00, 25.00, 40.00]

function fnAtuliazarPreco(lista, indice, novoValor) {
    if ((lista.length - 1 ) < indice){
    lista[indice] = novoValor
    }
    console.log(`Novos valores de preço são: ${lista}`);
    
    
}

//10
function fnCriarBoletim(nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3]

    console.log(notas);
    
}





























fnExibirChamada()
fnAdicionarProduto("produto", "HeadsetUSB")
fnEncaixarPrioridade(fila, "Dona Clara")
fnChamarProximo(fila)
fnDesfazerAcao(acao)
fnVerificarEstoque (amoxerifado)
fnVerificarLista(festa, "Lucas")
fnConsultarCorredor(corredores, "Café")
fnConsultarCorredor(corredores, "Macarrão")
fnAtuliazarPreco(basePreco, 3, 28.5)
fnCriarBoletim(8.0, 7.5, 5.5)