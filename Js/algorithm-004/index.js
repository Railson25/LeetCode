// esta funcao recebe um valor e compara se eles sao iguais ou nao
var expect = function(val) {
    return {
        // aqui criamos um metodo toBe que e uma arrow function passando o valor a ser comparado
        toBe: (val2)=>{
            if(val2 !== val) throw new Error('Not Equal')
            else return true 
        },
        // esse metodo faz o oposto do prijmeiro
        notToBe: (val2) => {
            if(val === val2) throw new Error('Equal')
            else return true
        }
    } 
};


console.log(expect(5).notToBe(5))