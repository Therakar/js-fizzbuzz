"use strict"


const ul = document.querySelector (`ul.list`);

// ciclo for che restituisce i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    const li = document.createElement (`li`);
    ul.append (li)
    // se un numero è multiplo di 3 e allo stesso tempo di 5, quindi se lo divido per 3 o per 5 mi da resto 0, nella console verrà visulaizzato 'FizzBuzz'.
    if ((i % 5 == 0) && (i % 3 == 0)){ /*oppure (i % 15 == 0) */
        console.log(`FizzBuzz`);
        li.append (`FizzBuzz`);
    } 
    // se un numero è multiplo di 5, quindi se lo divido per 5 mi da resto 0, nella console verrà visulaizzato 'Buzz'. 
    else if (i % 5 == 0){
        console.log(`Buzz`);
        li.append (`Buzz`);
    } 
    // se un numero è multiplo di 3, quindi se lo divido per 3 mi da resto 0, nella console verrà visulaizzato 'Fizz'. 
    else if (i % 3 == 0){
        console.log(`Fizz`);
        li.append (`Fizz`);
    }
    // in tutti gli altri casi viene stampato il numero 
    else{
        console.log(i);
        li.append (i);
    }
}
 