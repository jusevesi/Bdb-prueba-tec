
function prueba1() {
    //Entrada de arreglo 
    let numero = prompt("Ingrese arreglo de números separados por coma (,)", "1,2,1,3,4,2");
    let numeroArray = numero.split(",").map(numero => +numero);
    let count = {};
    let suma = 0;

    //Objeto clave-valor con las veces que se repite un número
    numeroArray.forEach(i => { count[i] = (count[i] || 0) + 1; });

    //Obtención de los valores del objeto
    const valoresArray = Object.values(count);

    //Calculo del total de parejas
    valoresArray.forEach(repeats => {
        if (repeats > 1) {
            let pares = Math.floor(repeats / 2)
            suma += pares;
        }
    });

    //Impresion del resultado
    alert(`Total de pares: ${suma}`);
};


function prueba2(){
    //Entrada de los 5 numeros
    let numero = prompt("Ingreso 5 números separados con coma (,)", "1,2,3,4,5");
    let numeroArray = numero.split(",").map(numero => +numero);

    //Calculos
    const mayor = Math.max(...numeroArray);
    const menor = Math.min(...numeroArray);
    let sumaMin = 0;
    let sumaMax = 0;

    numeroArray.forEach(numero => {
        if (numero != mayor) {
            sumaMin += numero;
        }
        if (numero != menor) {
            sumaMax += numero;
        }
    })

    //Impresion resultados
    alert(`Suma mínima: ${sumaMin}, Suma máxima: ${sumaMax}`)

}

function prueba3(){
    //Entrada de los años y alturas de las velas
    let edad = prompt("Ingrese la edad de su sobrina:",);
    let alturas = prompt(`Ingrese las alturas de las ${edad} velas del pastel, separadas por coma (,)`, `1,2,3,..,n(${edad})`);

    //Calculos
    const alturasArray = alturas.split(",").map(alturas => +alturas);
    const mayor = Math.max(...alturasArray);
    let count = 0;

    alturasArray.forEach(i => {
        if (mayor === i) {
            count += 1;
        }
    });
    //Impresion resultado velas apagadas
    alert(`Cantidad de velas apagadas: ${count}`);

}