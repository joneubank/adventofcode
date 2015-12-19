/*

*/
(function()
{
'use strict';

    var getValue = function(instruction){
        if(instruction.ivalue === null)
        {
            var op = instruction.operation;
            instruction.ivalue = operations[op](instruction);
        }

        return instruction.ivalue;
    };

    var instructions = {};


    var addInstruction = function(text)
    {
        var outputLabel = "a";
        var data = {};

        //input labels and input calculated value
        data.i1 = "";
        data.i2 = "";
        data.ivalue = null;
        data.operation = "";

        //PARSING TIME!


        instructions[outputLabel] = data;
    };

    // pass an instuction to an operation method to calculate its value
    var operations = {};
    operations.AND = function(instruction) {
        var label1 = instruction.i1;
        var label2 = instruction.i2;

        var i1 = instructions[label1];
        var i2 = instrucitons[label2];

        var i1value = getValue(i1);
        var i2value = getValue(i2);

        instruction.ivalue = (i1value & i2value) & 65535;
    };

    operations.OR = function(instruction) {
        var label1 = instruction.i1;
        var label2 = instruction.i2;

        var i1 = instructions[label1];
        var i2 = instrucitons[label2];

        var i1value = getValue(i1);
        var i2value = getValue(i2);

        instruction.ivalue = (i1value | i2value) & 65535;
    };

    operations.RSHIFT = function(instruction) {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (i1value >> instruction.i2) & 65535;
    };

    operations.LSHIFT = function(instruction) {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (i1value << instruction.i2) & 65535;
    };

    operations.NOT = function(instruction) {
        var label1 = instruction.i1;

        var i1 = instructions[label1];

        var i1value = getValue(i1);

        instruction.ivalue = (~ i1value) & 65535;
    };

    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d07i.txt')
    });

    rl.on('line', record);

    rl.on('close', function()
    {
        console.log("Answer: " + get_sum());
    });

})();
