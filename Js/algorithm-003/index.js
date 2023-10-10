//Funcao contador! passando um numero qualquer , somando e imprimindo  
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


//A partir do numero inicial estou somando e adicionando esses valores a um novvo array 
var createCounter = function(n) {
    let counter = n
    console.log(counter)
    return function() {
        n++
        counter.push(n);
        return counter.slice()
    };
};

var contador = createCounter([10]);
console.log(contador())
console.log(contador())
console.log(contador())