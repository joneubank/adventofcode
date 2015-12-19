/*
Advent of Code
Day 7
Problem 1

Input: d07i.txt
*/

(function()
{
'use strict';

    var getValue = function(instruction){
        console.log(instruction.out);

        if(instruction.ivalue === null)
        {
            var op = instruction.operation;
            operations[op](instruction);

        }

        return instruction.ivalue;
    };

    var instructions = {};


    var addInstruction = function(text)
    {
        var data = {};

        //input labels and input calculated value

        data.i1 = "";
        data.i2 = "";
        data.ivalue = null;
        data.operation = "";

        //PARSING TIME!
        var split = text.split(" ");

        var outputLabel = split[split.length-1];
        data.out = outputLabel;

        if (split.length === 3)
        {
            // Two options for this length, integer value or direct copy of
            //  another input value
            if(isNaN(split[0]))
            {
                data.i1 = split[0];
                data.operation = "EQUAL";
            } else
            {
                //direct value apply
                data.ivalue = parseInt(split[0]) & 65535;
            }

        } else if (split.length === 4)
        {
            // NOT operator
            if (split[0] !== "NOT")
            {
                console.log("WARNING! Expected NOT command, got: " + split[0]);
            }
            data.operation = split[0];
            data.i1 = split[1];

        } else
        {
            data.operation = split[1];
            data.i1 = split[0];
            data.i2 = split[2];
        }

        instructions[outputLabel] = data;
    };

    // pass an instuction to an operation method to calculate its value
    var operations = {};
    operations.AND = function(instruction)
    {
        var label1 = instruction.i1;
        var label2 = instruction.i2;

        // the value is either given in the instruciton or has to be retrieved
        //  from an input for the given input. so we check each label to see
        //  if it is a number or not
        var i1value;
        var i2value;

        if( isNaN(label1) )
        {
            var i1 = instructions[label1];
            i1value = getValue(i1);
        } else
        {
            i1value = label1;
        }

        if( isNaN(label2) )
        {
            var i2 = instructions[label2];
            i2value = getValue(i2);
        } else
        {
            i2value = label2;
        }

        instruction.ivalue = (i1value & i2value) & 65535;
    };

    operations.OR = function(instruction)
    {
        var label1 = instruction.i1;
        var label2 = instruction.i2;

        // the value is either given in the instruciton or has to be retrieved
        //  from an input for the given input. so we check each label to see
        //  if it is a number or not
        var i1value;
        var i2value;

        if( isNaN(label1) )
        {
            var i1 = instructions[label1];
            i1value = getValue(i1);
        } else
        {
            i1value = label1;
        }

        if( isNaN(label2) )
        {
            var i2 = instructions[label2];
            i2value = getValue(i2);
        } else
        {
            i2value = label2;
        }


        instruction.ivalue = (i1value | i2value) & 65535;
    };

    operations.RSHIFT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (i1value >> instruction.i2) & 65535;
    };

    operations.LSHIFT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (i1value << instruction.i2) & 65535;
    };

    operations.NOT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (~ i1value) & 65535;
    };

    operations.EQUAL = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = i1value;
    };

    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d07i.txt')
    });

    rl.on('line', addInstruction);

    rl.on('close', function()
    {
        var out = getValue(instructions["a"]);
        console.log(instructions);
        console.log(out);
    });

})();
