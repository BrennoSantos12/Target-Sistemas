function verificar() {


     // escreva seu texto dentro do ''
     
     stg = 'BAnana';

    console.log(stg);
  
    let contadorMinuscula = 0;
    let contadorMaiuscula = 0;
    


    for (let i = 0; i < stg.length; i++) {
        if (stg[i] === 'a') {
           contadorMinuscula++;
        } else if (stg[i] === 'A') {
             contadorMaiuscula++;
        }
    }
    console.log(`A palavra ${stg} possui ${contadorMinuscula} a`);
    console.log(`A palavra ${stg} possui ${contadorMaiuscula} A`);
    
    
}

verificar();