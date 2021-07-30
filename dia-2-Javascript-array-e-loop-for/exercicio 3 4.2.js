let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/

let soma = 0;
let ma = 0;

for(let index = 0;index < numbers.length; index +=1){
    soma += numbers[index];
}

ma = soma / numbers.length

console.log(ma)

