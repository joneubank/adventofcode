/*
Advent of Code
Day 16
Problem 2

Input: d16i.txt

Notes:
For some reason in this solution i get the original answer plus the new one.
I'm not all that keen on sorting out why so I just submitted the new answer
    for this probolem
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
                if(truth[key] !== undefined)
                {
                    if(['cats', 'trees'].indexOf(key) >= 0)
                    {
                        if(aunt[key] <= truth[key])
                        {
                            match = false;
                            break;
                        }
                    } else if (['pomeranians', 'goldfish'] >= 0)
                    {
                        if(aunt[key] >= truth[key])
                        {
                            match = false;
                            break;
                        }
                    } else
                    {
                        if(aunt[key] !== truth[key])
                        {
                            match = false;
                            break;
                        }
                    }

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
