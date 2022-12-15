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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let min = 0;
    let max = 0;
    const cadena = arr.sort(function(a, b){return a - b}); 
    cadena.forEach((num, index)=>{
        
        if(index !== 0){
            max = max + num;
        }
        if(index !== 4){
           min = min + num;
        }
    })
    
    console.log(min, max);
    return min, max;
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
