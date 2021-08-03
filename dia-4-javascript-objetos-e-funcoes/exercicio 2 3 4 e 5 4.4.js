// 1 -Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida,
// imprima o objeto no console. Valor esperado no console:

//{
 //  personagem: 'Margarida',
 // origem: 'Pato Donald',
//  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  recorrente: 'Sim'
//}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
//2 -Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = "sim";

// 3-Faça um for/in que mostre todas as chaves do objeto

//for(let key in info){
 //   console.log(key)
//}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto

//for(let key in info){
 //   console.log(info[key]);
//}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último patinhas',
    recorrente: 'sim'
}

for(let key in info){
    let margarida = (info[key]);
    console.log(margarida)
}
for(let key2 in info2){
    let donald = (info2[key2]);
    console.log(donald)
}
    




