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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
    
  // base case length === 1
  if(n.length === 1) {
    return Number(n)
  }
  
  return superDigit(n.split("").reduce((acc, num) => {
      console.log(num+' x '+ k +' = '+ (num*k) + ' + '+ acc +' == '+ ((num*k)+ acc))
        acc= Number(num * k)+acc;
        
        return acc
    }, 0).toString() , 1)
    

}

function arrayFormatter(n){
    let digitChain = n.split('')
    let parserArray = []
    
    digitChain.forEach((num)=>{    
        if(!isNaN(num)){
          parserArray.push(parseInt(num))  
        }

    })
    
    return (parserArray)
}

function superSum(array){
    return array.reduce((a,b)=> a+b, 0)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
