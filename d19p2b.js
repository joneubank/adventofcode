/*
Advent of Code
Day 19
Problem 1

Input: d19i.txt
*/

(function()
{
'use strict';

    var startingMolecule = 'e';

    var reactions = [];
    var targetMolecule = 'e';
    var inputLine = function(text)
    {
        var split = text.split(" ");
        if(split.length === 1)
        {
            startingMolecule = text;
        } else {
            reactions.push([split[2],split[0]]);
        }
    };

    var outputs = [];
    var searchIndex = 0;
    var indexMax = 0;
    var checkReaction = function(molecule, reaction, lastOutputs)
    {
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
                // console.log(output);

                if(outputs.indexOf(output) === -1 && (output.indexOf('e') < 0 || output.length === 1))
                {
                    outputs.push(output);
                }

                index += 1;
            }
        }
    };

    var nextStep = function()
    {

        //calculate all next steps
        var maxIndex = outputs.length;
        for(var i = searchIndex; i < maxIndex; i++)
        {
            for(var j = 0; j < reactions.length; j++)
            {
                checkReaction(outputs[i], reactions[j], outputs);
            }
        }
        searchIndex = maxIndex;

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
        outputs = [startingMolecule];
        var step = 0;
        var success = false;
        while(step < 10000)
        {
            step += 1;
            var outputsSize = outputs.length;
            success = nextStep();
            console.log("Step " + step + ": " + outputs.length + " searchIndex: " + searchIndex);


            if(success || outputs.length === outputsSize)
            {
                break;
            }
        }
        console.log(outputs.sort(function(a, b){return b.length-a.length;}));
        console.log("Outputs: " + outputs.length);
        console.log("Step: " + step);
        console.log("Success: " + success);
    });

})();
