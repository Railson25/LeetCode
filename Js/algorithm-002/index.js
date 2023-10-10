//Funcao para esperar um determinado tempo para ser executada  
async function sleep(millis) {
    await new Promise((resolve) => setTimeout(resolve, millis));
}