/*
Advent of Code
Day 16
Problem 1

Input: d16i.txt

Notes:
Easy solution is just to brute force a solution
Second easiest is brute force with elminating obviously bad combinations
Better would be to use some sort of matrix with gradient descent, but that
    would take longer to sort out than I want to apply to this right now

Cause only 4 ingredients brute force will work fine, trying to quickly
    eliminate sets of obviously impossible solutions
*/

(function()
{
'use strict';

    var truth = {
        children: 3,
        cats: 7,
        samoyeds: 2,
        pomeranians: 3,
        akitas: 0,
        vizslas: 0,
        goldfish: 5,
        trees: 3,
        cars: 2,
        perfumes: 1
    };

    var aunts = {};
    var addAunt = function(text)
    {
        var split = text.split(" ");

        var num = parseInt(split[1]);

        var data  = {};
        data.num = num;

        for(var i = 1; i < split.length/2; i++)
        {
            var label = split[i*2].replace(':','');
            var value = parseInt(split[i*2+1]);
            data[label] = value;
        }

        aunts[num] = data;
    };

    var matches = [];
    var findMatch = function()
    {
        for(var i = 1; i <= Object.keys(aunts).length; i++)
        {
            var aunt = aunts[i];
            // console.log(aunt);

            var keys = Object.keys(aunt);
            var match = true;
            for(var j = 0; j < keys.length; j++){
                var key = keys[j];
                if(truth[key] !== undefined && aunt[key] !== truth[key])
                {
                    match = false;
                    break;
                }
            }

            if(match)
            {
                console.log("Match: " + aunt.num);
            }

        }
    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d16i.txt')
    });

    rl.on('line', addAunt);

    rl.on('close', function()
    {
        findMatch();
        // console.log(aunts);
    });

})();
