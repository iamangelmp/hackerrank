'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    /**
     * 1 postitivos
     * 2 negativos
     * 3 0
    */
    let positivos =[]
    let negativos = []
    let nulos = []
    
    let pos_val, neg_val, nul_val = 0;
    Number (pos_val, neg_val, nul_val);
    
    //manda a cada arreglo de cada regla
    arr.forEach((num)=>{
        if(num>0){
            positivos.push(num)
        }else if (num <0){
            negativos.push(num)
        }else if (num == 0){
            nulos.push(num)
        }else{
            return 0;
        }
    });
    
    /***
     *objeto que indica cuantos numeros de cada regla corresponden
    console.log({
        positivos: positivos.length,
        negativos : negativos.length,
        nulos : nulos.length
    })
     
    
    /**
     * Se pueden hacer validaciones si se tienen otros tipos de datos con este objeto
     * {
        total_arr: arr.length,
        total_validation: positivos.length+ negativos.length+ nulos.length
    }
     */
    
    //se parcea a 6 decimales, 1 de resultado, 5 ceros, como se requiere
    pos_val = (positivos.length / arr.length).toFixed(6)
    neg_val = (negativos.length / arr.length).toFixed(6)
    nul_val = (nulos.length / arr.length).toFixed(6)
    
    //se agrega a un arreglo para ciclar el resultado como se solicita
    const values = [pos_val,neg_val,nul_val]
    
    values.forEach(value=>{
        console.log(value)
        return value
    })

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
