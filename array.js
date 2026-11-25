// [] -> significa um array
// Os valores são separados por virgula

let nomes =["Isa", "Victor", "Pedro", "Samuel", "Geovana"]

console.log(nomes);
console.log(nomes[3]);

nome[4] = "caleb" // Substituindo valor em posição especifica
console.log(nomes);


console.log[nomes.length] = "geovana" // Conta quantas informação eu tenho no meu array
const frutas = ["Maça", "Banana", "Laranja"]
console.log(frutas.length);
// Array tem quantidade (e pode cortar), string tem tamanho de texto
//(e é fixa), objeto não tem .lenght
// .lenght = Tamanho ou quantidade, mas muda conforme o tipo de dado.

console.log(nomes);

nomes.push("Nicolas") // push adiciona mais um valor ao FINAL do array
console.log(nomes);

 



nomes.unshift("Ro") // adicona um valor no COMEÇO do array
console.log(nomes);

// Se eu precisar validar que uma informação existe em um array
console.log(nomes.includes("Samuel"));


//e se eu precisar saber em que posição (indice) essa informação esta?
console.log(nomes.indexOf("Nicolas"));


// se eu precisar percorrer todo o array
nomes.forEach((linha)=> {
    console.log(linha);
    
})
