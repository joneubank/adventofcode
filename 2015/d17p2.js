/*
Advent of Code
Day 17
Problem 2

Input: d17i.txt

*/

(function()
{
'use strict';

    var containers = [];
    var addContainer = function(text)
    {
        containers.push(parseInt(text));
    };

    var count = 0;
    var setSize = 1000;
    var combinations = function(chosen, available, remainder)
    {
        for(var i = 0; i < available.length; i++)
        {
            var nextSet = [].concat(chosen);
            nextSet.push(available[i]);

            if(available[i] === remainder)
            {
                console.log("Match: " + nextSet);
                if(nextSet.length < setSize)
                {
                    setSize = nextSet.length;
                    count = 1;
                } else if (nextSet.length === setSize)
                {
                    count += 1;
                }
                continue;

            } else if(available[i] < remainder) {
                if(i !== available.length-1)
                {
                    var remaining = [];
                    for(var j = i+1; j < available.length; j++)
                    {
                        remaining.push(available[j]);
                    }
                    combinations(nextSet, remaining, remainder-available[i]);
                }
            }
            // console.log(nextSet);

        }
    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d17i.txt')
    });

    rl.on('line', addContainer);

    rl.on('close', function()
    {
        // combinations([], [1, 2, 3, 4], 4);
        combinations([], containers, 150);
        console.log("Answer: " + count);
    });

})();
