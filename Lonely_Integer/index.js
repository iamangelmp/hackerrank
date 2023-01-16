"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  const chain = orderArray(a);

  let uniq;

  //Itera cada numero del arreglo
  chain.forEach((element) => {
    let indices = [];
    let idx = chain.indexOf(element);

    //en cada iteración recibe las posiciones de cada numero en el arreglo
    while (idx != -1) {
      indices.push(idx);
      //Cada iteración guarda las posiciones en "indices"
      idx = chain.indexOf(element, idx + 1);
    }

    //Si la iteración de un numero es igual a 1, es unico en toda la cadena
    if (indices.length == 1) {
      uniq = chain[indices];
    }
  });

  return uniq;
}

//Ordena el arreglo
function orderArray(array) {
  return array.sort((a, b) => a - b);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + "\n");

  ws.end();
}
