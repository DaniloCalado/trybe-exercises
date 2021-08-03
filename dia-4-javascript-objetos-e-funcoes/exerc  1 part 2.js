/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo ,
 ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function checkPalindrome(str){
    let reversed = [...str].reverse().join("")
    return str === reversed
  }
  
   console.log(checkPalindrome("reviver"));
  
  console.log(checkPalindrome("arara"));
  
  console.log(checkPalindrome("manhã"));