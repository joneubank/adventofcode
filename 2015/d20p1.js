/*
Advent of Code
Day 20
Problem 1

Input: 29000000
*/

(function()
{
'use strict';

    var target = 29000000;

    /* commonFactors(num)
    *   returns an array with all common factors of the input num
    *   The array will be sorted numerically ascending.
    *   Only works for positive inputs, only returns positive integer factors.
    */
    function commonFactors(num)
    {
        var output = [1];

        var maxCheck = Math.floor(num/2);
        for(var i = 2; i <= maxCheck; i++)
        {
            if(num % i === 0)
            {
                output.push(i);
            }
        }

        if(num !== 1)
        {
            output.push(num);
        }
        return output;
    }

    function houseValue(num)
    {
        var factors = commonFactors(num);
        return factors.reduce(function(total, current){return total + current;})*10;
    }

    var lastCheckSum = 0;
    var checkHouse = 660000-1;
    var maxSum = 0;
    while(lastCheckSum < target)
    {
        checkHouse += 1;
        lastCheckSum = houseValue(checkHouse);
        if(lastCheckSum > maxSum) {maxSum = lastCheckSum;}
        if(checkHouse % 100000 === 0)
        {
            console.log(checkHouse + ": " + lastCheckSum + " Max: " + maxSum);
        }
    }
    console.log("Answer: " + checkHouse + " max: " + maxSum);
})();
