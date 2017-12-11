/*
Advent of Code 2017
Day : 1
*/

const Utils = require('../utils');

const input = Utils.readFile('input.txt').trim();


function p1(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const prev = i === 0 ? input.length - 1 : i - 1;
    if (input.charAt(i) === input.charAt(prev)) {
      sum += parseInt(input.charAt(i), 10);
    }
  }
  return sum;
}

function p2(input) {
  let sum = 0;
  const distance = input.length / 2;
  const { length } = input;
  for (let i = 0; i < length; i++) {
    const prev = i + distance <= length ? i + distance : i - distance;

    if (input.charAt(i) === input.charAt(prev)) {
      sum += parseInt(input.charAt(i), 10);
    }
  }
  return sum;
}

console.log(`Day 1: ${p1(input)}`);
console.log(`Day 2: ${p2(input)}`);

