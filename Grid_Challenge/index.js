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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    const sortedRows = grid.reduce((acc, str) => {
    acc.push(str.split('').sort());
    return acc
  }, []);
  // console.log(sortedRows);
  
  const sortedColumns = sortedRows.reduce((acc, arrOfStr) => {
    arrOfStr.map((char, idx) => {
      return !acc[idx] ? acc[idx] = char : acc[idx] +=char
    });
    return acc;
  }, {});
  // console.log(sortedColumns);
  
  const checkAlphabetical = Object.values(sortedColumns).reduce((acc, arrOfStr) => {
    arrOfStr === arrOfStr.split('').sort().join('') ? acc.push('YES') : acc.push('NO');
    return acc;
  }, []);
  // console.log(checkAlphabetical);
  
  for(let i = 0; i < checkAlphabetical.length; i++) {
    if(checkAlphabetical[i] === 'NO') {
      return 'NO'
    }
  }
  return 'YES'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
