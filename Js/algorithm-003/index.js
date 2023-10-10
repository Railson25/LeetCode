//Funcao contador! passando um numero qualquer , somando e imprimindo eles  
var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++;
    };
};

var contador = createCounter(10);
console.log(contador())
console.log(contador())
console.log(contador())
