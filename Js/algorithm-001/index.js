
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