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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// let hora = '12:40:22AM'
let hora = "12:45:54PM";
//let hora = '01:45:54AM'

timeConversion(hora);

function timeConversion(s) {
  // Write your code here

  let time = timeFormatter(s);
  let hora;

  switch (time.timeFormat) {
    case "PM":
      if (12 - time.hour <= 0) {
        //time.hour = 0;
        hora = hourFormatter(time.hour);
        return time.hour + ":" + time.minut + ":" + time.second;
      } else {
        return 12 + Number(time.hour) + ":" + time.minut + ":" + time.second;
      }

      break;

    case "AM":
      if (12 - Number(time.hour) <= 0) {
        time.hour = 0;
        hora = hourFormatter(time.hour);
        return hora + ":" + time.minut + ":" + time.second;
      } else {
        hora = hourFormatter(time.hour);
        return hora + ":" + time.minut + ":" + time.second;
      }

      break;
  }
}

function timeFormatter(time) {
  let [hour, minut, second] = time.split(":");
  const timeFormat = second.slice(2, 4);
  second = second.slice(0, 2);

  let timeObj = {
    hour,
    minut,
    second,
    timeFormat,
  };
  return timeObj;
}

function hourFormatter(hour) {
  if (Number(hour) < 10) {
    return "0" + Number(hour);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
