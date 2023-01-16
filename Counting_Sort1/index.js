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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let freqArr = new Array(100).fill(0);
  
    for (let i of arr) {
      freqArr[i] += 1;
    }
  
    return freqArr;
  }

function countingSorttt(arr) {
    // Write your code here
    
    const chain = orderArray(arr)
    
    let emptyArray = Array.from( Array(100));
    
    chain.forEach((element, index)=>{
        let indices = [];
        
        let numero = chain.indexOf(element)
        
        while(numero != -1){
            indices.push(numero);
            
            numero = chain.indexOf(element, numero +1 )
        }
        
        //console.log('indice='+element+'   value='+indices.length)
        
        emptyArray[element] = indices.length
  
    })
   
    emptyArray= fillEmptySpaces(emptyArray)
   //console.log (fillArray.join(" "))
   console.log( emptyArray.toString().replaceAll(',',' '))
   return emptyArray.toString().replaceAll(',',' ')
    
    
 }

function fillEmptySpaces(array){
    let arrayFilled = []
    array.forEach((number)=>{
        if(!number){
            number = 0;
        }
        arrayFilled.push(number)
    })
    return arrayFilled;
}

function orderArray(array){
    return array.sort((a,b)=>a-b)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    // ws.write(result.join(' ')+'\n');
    ws.write(result + '');

    ws.end();
}
