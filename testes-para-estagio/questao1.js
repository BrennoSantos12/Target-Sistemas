function fibonacci(num) {

    let a = 0;

    let b = 1;
    
    while (b < num) {
        let c = a + b;
        a = b;
        b = c;
    }

if (b === num) {
    console.log(`o número ${num} pertence a fibonacci.`);
} else {
    console.log(`o número ${num} não pertence a fibonacci.`);
}
}

// Adicione o valor desejado dentro dos parâmetros da função
fibonacci(41);




