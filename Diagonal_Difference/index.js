'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let i_d = [] //izquierda - derecha
    let d_i = [] //derecha - izquierda
    let x1 = 0 ;
    let x2 = 0 ;
    
    console.table(arr)
    //desarma la matriz en arreglos
    arr.forEach((arreglo,indice)=>{
        
        //desarma el arreglo en listas
        arreglo.forEach((num, i)=>{
            
            //itera las listas por posicion en el arrego izquierda - derecha
            for(let c = 0; c <=arr.length; c++){
                
                //itera sobre los valores que sean validos e iguales al indice 
                if( arreglo[c] !== undefined && i == indice ){
                    
                    //itera la diagolal asencente si no es indefinida
                    if([arreglo[i]][c] !== undefined){
                        //console.log('matriz 1',[arreglo[i]][c])
                        i_d.push([arreglo[i]][c])
                    }
                    
                }
                
            }
            
        })
    });
    
    //desarma la matriz en arreglos
    arr.slice().reverse().forEach((arreglo,indice) => {
        
        //desarma los arreglos en listas
        arreglo.forEach((num,i)=>{
            
            //valida las listas y asigna posiciones a cada numero
            for(let c = arr.length; c >=0 ; c--){
                
                //valida que el numero y su posicion se agreguen en la posicion actual
                if([arreglo[c]] !== undefined && i == indice){
                    
                    //evita duplicidad
                    if([arreglo[i]][c]){
                        d_i.push([arreglo[i]][c])
                        //console.log([arreglo[i]][c])
                    }
                }
            }   
            
        })
    })


    
    
    
    //obtiene los numeros y sus posiciones dentro de la matriz
    i_d.forEach((num)=>{
        //console.log(num)
        x1 = x1 + num;
    })

    //obtiene los numeros y sus posiciones dentro de la matriz
    d_i.forEach((num)=>{
        //console.log(num)
        x2 = x2 + num;
    })  
    
    console.log(Math.abs(x1 - x2))
    return Math.abs(x1 - x2);
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let i_d = [] //izquierda - derecha
    let d_i = [] //derecha - izquierda
    let x1 = 0 ;
    let x2 = 0 ;
    
    console.table(arr)
    //desarma la matriz en arreglos
    arr.forEach((arreglo,indice)=>{
        
        //desarma el arreglo en listas
        arreglo.forEach((num, i)=>{
            
            //itera las listas por posicion en el arrego izquierda - derecha
            for(let c = 0; c <=arr.length; c++){
                
                //itera sobre los valores que sean validos e iguales al indice 
                if( arreglo[c] !== undefined && i == indice ){
                    
                    //itera la diagolal asencente si no es indefinida
                    if([arreglo[i]][c] !== undefined){
                        i_d.push([arreglo[i]][c])
                    }
                    
                }
                
            }
            
        })
    });
    
    //desarma la matriz en arreglos
    arr.slice().reverse().forEach((arreglo,indice) => {
        
        //desarma los arreglos en listas
        arreglo.forEach((num,i)=>{
            
            //valida las listas y asigna posiciones a cada numero
            for(let c = arr.length; c >=0 ; c--){
                
                //valida que el numero y su posicion se agreguen en la posicion actual
                if([arreglo[c]] !== undefined && i == indice){
                    
                    //evita duplicidad
                    if([arreglo[i]][c]){
                        d_i.push([arreglo[i]][c])
                    }
                }
            }   
            
        })
    })


    
    
    
    //obtiene los numeros y sus posiciones dentro de la matriz
    i_d.forEach((num)=>{
        x1 = x1 + num;
    })

    //obtiene los numeros y sus posiciones dentro de la matriz
    d_i.forEach((num)=>{
        x2 = x2 + num;
    })  
    
    
    return Math.abs(x1 - x2);
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
