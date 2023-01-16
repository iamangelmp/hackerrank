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
    
    const chain = orderMatrix(arr)
    let d1 = 0;
    let d2 = 0;
    chain.forEach((diagonal, n_diagonal)=>{
        
        diagonal.forEach((array, matrix_index)=>{
            //console.log(array[matrix_index], n_diagonal)
            
            switch(n_diagonal){
                case 0:
                //diagonal 1
                    d1 = d1+  array[matrix_index];
                    
                break;
                case 1:
                //diagonal 2
                
                    d2 = d2+ array[matrix_index]
                break;
            }
        })
        
    })
    
    return  calculateDiff(d1, d2)
}

function calculateDiff(diagonal_1, diagonal_2){
    if(diagonal_1 - diagonal_2 > 0){
        return diagonal_1 - diagonal_2;
    }
    return diagonal_2 - diagonal_1
    
}


function orderMatrix(array){
    let diagonal_1 = array
    let diagonal_2 = [...array].reverse()
    
    return [diagonal_1, diagonal_2]
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
