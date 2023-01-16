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
    const total = arr.length;
    let pos = 0, neg= 0, zero = 0;
    
    arr.forEach((value)=>{
        if(positive(value)){
            pos ++
        }
        if(negative(value)){
            neg ++
        }
        if (value == 0){
            zero ++
        }
    })
    const res = formatter([pos/total, neg/total, zero/total])
    return res;
}

function formatter(numbers){
    
    numbers.forEach(number=>{
        return console.log(number.toFixed(6));
    })
}

function positive(value, status){
    if (value >0) return true
    return false
}

function negative(value, status){
    if (value<0) return true
    return false
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
