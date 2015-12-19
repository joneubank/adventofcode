/*
Advent of Code
Day 7
Problem 2

Input: d07i.txt

Note: all values are 16 bit hence liberal usage of "& 65535"
*/

(function()
{
'use strict';

    /*
    *   getValue(instruction)
    *   Return the value of the provided instruction. If already calculated,
    *       then use calculated value, otherwise, calculate from inputs.
    *
    *   Calculation is performed by a method in the operations object. The
    *       specific method called is based on the .operation value of the
    *       provided instrcution object.
    *
    *   The operation will call getValue on the inputs to this instrcution. If
    *       they have not been calculated previously than they will first be
    *       calculated before this instruction can be evaluated. This will
    *       create a stack of getValue calls until all required inputs
    *       in the circuit have been resolved.
    */
    var getValue = function(instruction){
        console.log(instruction.outputLabel);

        if(instruction.outputValue === null)
        {
            var op = instruction.operation;
            operations[op](instruction);

        }

        return instruction.outputValue;
    };

    /* instructions:
    *   * set of data objects with the information on each instruction
    *   * each instruction added using addInstruction on a line from the inputs
    *   * the key for each instruction is the output node's label
    *   * form of each instruction is, based on : x AND y -> a
    *    {
            outputLabel : "a", // output node label
            i1 : "x", // input 1 label, or value if provided
            i2 : "y", // input 2 label
            operation : "AND", // used for operation method label
                               //  to get node value
            outputValue : null // calculated output value, null if not calc'ed
         }
    */


    var instructions = {};
    var addInstruction = function(text)
    {
        var data = {};

        //input labels and input calculated value

        data.i1 = "";
        data.i2 = "";
        data.outputValue = null;
        data.operation = "";

        //PARSING TIME!
        var split = text.split(" ");

        var outputLabel = split[split.length-1];
        data.outputLabel = outputLabel;

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
                data.outputValue = parseInt(split[0]) & 65535;
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

    /*
    *   operations stores a list of functions identified with keys from the
    *       instruction set for each operation.
    *
    *   The function will calculate the outputValue for the provided
    *       instruction.
    *
    */
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

        instruction.outputValue = (i1value & i2value) & 65535;
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


        instruction.outputValue = (i1value | i2value) & 65535;
    };

    operations.RSHIFT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.outputValue = (i1value >> instruction.i2) & 65535;
    };

    operations.LSHIFT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.outputValue = (i1value << instruction.i2) & 65535;
    };

    operations.NOT = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.outputValue = (~ i1value) & 65535;
    };

    operations.EQUAL = function(instruction)
    {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.outputValue = i1value;
    };


    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d07i.txt')
    });

    rl.on('line', addInstruction);

    rl.on('close', function()
    {
        var answer = getValue(instructions["a"]);
        console.log(instructions);
        console.log(answer);

    });

})();
