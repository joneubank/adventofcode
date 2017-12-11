/*
Advent of Code 2017
Day : 1
*/

const Utils = require('../utils');

let checksum1 = 0;
function p1(input) {
  const nums = input.split('\t');

  const max = nums.reduce(
    (output, next) => (output === null ? next : Math.max(output, next)),
    null
  );
  const min = nums.reduce(
    (output, next) => (output === null ? next : Math.min(output, next)),
    null
  );

  checksum1 += max - min;
}

let checksum2 = 0;
function findDivisor(num, candidates) {
  let result = null;
  candidates.some((value) => {
    const isDivisor = (Math.max(num, value) % Math.min(num, value)) === 0;
    if (isDivisor) {
      result = value;
      return true;
    }
    return false;
  });
  return result;
}

function p2(input) {
  const nums = input.split('\t').map(num => (parseInt(num, 10)));

  let num = null;
  let divisor = null;
  while (nums.length > 0 && divisor === null) {
    num = nums.shift();
    divisor = findDivisor(num, nums);
  }
  checksum2 += Math.max(num, divisor) / Math.min(num, divisor);
}


Utils.readLine('input.txt', p1, () => console.log(`Day 1: ${checksum1}`));
Utils.readLine('input.txt', p2, () => console.log(`Day 2: ${checksum2}`));

