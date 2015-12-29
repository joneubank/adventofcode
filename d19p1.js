/*
Advent of Code
Day 19
Problem 1

Input: d19i.txt
*/

(function()
{
'use strict';

    var reactions = [];
    var molecule = null;
    var inputLine = function(text)
    {
        var split = text.split(" ");

        if(split.length === 1)
        {
            molecule = text;
        } else {
            reactions.push(

                [  split[0] ,  split[2]  ]

                );
        }
    };


    var outputs = [];
    var checkReaction = function(reaction)
    {
        console.log(reaction);
        var index = 0;
        while(index >= 0)
        {
            index = molecule.indexOf(reaction[0], index);
            if(index >= 0)
            {
                var output =
                    molecule.slice(0,index)
                            .concat(reaction[1])
                            .concat(molecule.slice(index+reaction[0].length));

                if(outputs.indexOf(output) == -1)
                {
                    outputs.push(output);
                }

                index += 1;
            }
        }
    };


    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d19i.txt')
    });

    rl.on('line', inputLine);

    rl.on('close', function()
    {

        for(var i = 0; i < reactions.length; i++)
        {
            checkReaction(reactions[i]);
            // console.log(i + " = Input:" + reactions[i][0] + " - Output:" + reactions[i][1]);
        }
        console.log(outputs.length);
    });

})();
