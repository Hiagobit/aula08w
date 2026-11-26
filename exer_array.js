// exercicio 1
let nome_colega = ["Matheus", "Nicolas", "Arthur", "Murilo", "Vitor"]



// exercicio 2
nome_colega.push("Geovana")
console.log(nome_colega);

// exercicio 3
nome_colega.unshift("gato")
console.log(nome_colega);

// exercicio 4
nome_colega.push("alexandre", "Deus")
console.log(nome_colega);

// exercicio 5
console.log(nome_colega[3]);
console.log(nome_colega);

// exercicio 6
let pet = nome_colega.shift()
console.log(nome_colega);


let acao = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] 
function fnDesfazerAcao(acao) {
    console.log("Ultima ação foi realizada");
    acao.pop(acao)
    
    console.log(acao);
    
    
}

fnDesfazerAcao(acao)





