
// extendendo um novo array e atribuindo um novo metodo last !
Array.prototype.last = function (){
    // verificando se o array atual "this" e igual a 0
    if (this.length === 0) {
        return - 1
    } else {
        // Utilizando this.length -1 como indice para acesso o ultimo elemento do array !independente do tamanho do array
        return this[this.length -1]
    }
}


const minhaMatriz = [1, 2,3,4,45];
const resultado = minhaMatriz.last();
console.log(resultado)

// Formas de reduzir o codigo acima utilizando operador ternario

Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1
}
const resultado2 = minhaMatriz.last();

console.log(resultado2)

// Na terceira implementacao vamos gerar um novo array que contem apenas a ultima posicao do array anterior

Array.prototype.last = function() {
    // na funcao this.slice() criamos o novo array e pegamos a posicao inicial e unica [0] deste array 
    return this.length ? this.slice(-1) [0] : -1
}

const resultado3 = minhaMatriz.last();

console.log(resultado3)