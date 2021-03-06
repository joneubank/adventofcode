/*
Advent of Code
Day 19
Problem 1

Input: d19i.txt
I'm cheating by reading my input and noticing that it is impossible to turn CRn
into anything else, so we are really dealing with a set of CRn molecules
*/

(function()
{
'use strict';

    var startingMolecule = 'e';

    var reactions = [];
    var targetMolecule = null;
    var inputLine = function(text)
    {
        var split = text.split(" ");
        if(split.length === 1)
        {
            targetMolecule = text;
        } else {
            reactions.push([split[0],split[2]]);
        }
    };

    var outputs = [startingMolecule];
    var checkReaction = function(molecule, reaction, lastOutputs)
    {
        var index = 0;
        while(index >= 0)
        {
            index = molecule.indexOf(reaction[0], index);
            if(index >= 0)
            {
                var output =
                    molecule.slice(0, index)
                            .concat(reaction[1])
                            .concat(molecule.slice(index+reaction[0].length));
                // console.log(output);

                if(outputs.indexOf(output) === -1 && lastOutputs.indexOf(output) == -1)
                {
                    outputs.push(output);
                }

                index += 1;
            }
        }
    };


    var nextStep = function()
    {
        var current = outputs;
        outputs = [];

        //calculate all next steps
        for(var i = 0; i < current.length; i++)
        {
            for(var j = 0; j < reactions.length; j++)
            {
                checkReaction(current[i], reactions[j], current);
            }
        }

        //check for target
        if(outputs.indexOf(targetMolecule) == -1)
        {
            return false;
        }
        return true;
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
        var splits = targetMolecule.split("Rn");
        var splitTargets = [];
        for(var i = 1; i < splits.length; i++)
        {
            var chars = splits[i-1].split("");
            var lastChar = chars.pop();

            var lastCharIsLower = lastChar == lastChar.toLowerCase();

            var leader = lastChar;
            if(lastCharIsLower) {
                leader = chars.pop() + lastChar;
            }

            splitTargets.push(leader + "Rn" + splits[i]);
        }
        console.log(splitTargets);
    });

})();
