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
    
    let chain = orderArray(arr)

    let startMin = summArray(chain.slice(0,4))
    
    let startMax = summArray(chain.slice(1,5))
    
    console.log(startMin,startMax)
    

}

function summArray(chain, summa){
    return chain.reduce((a, b) => a + b, 0);
}

function orderArray(array, order){
    return array.sort((a, b) => a - b);
}



function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
