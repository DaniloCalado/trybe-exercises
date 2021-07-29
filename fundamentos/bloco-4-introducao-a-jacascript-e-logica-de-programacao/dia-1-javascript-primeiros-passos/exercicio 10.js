let custo = 100;
let venda = 200;
let imposto = (custo * 0,2);
let custoTotal = (custo + imposto);
let lucroProduto = (venda - custoTotal);


if(custo < 0 || venda < 0){
    console.log("ERRO");
}else {
    console.log((lucroProduto * 1000));
}


