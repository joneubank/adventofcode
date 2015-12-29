/*
Advent of Code
Day 23
Problem 1

Input: d23i.txt
*/

(function()
{
'use strict';

    var registers = {a:1, b:0};

    var programLines = [];
    var inputLine = function(text)
    {
        var instruction = instructions[text.substr(0,3)];
        var inputs = text.substr(4,text.length);

        programLines.push(
            {
                instruction: instruction,
                inputs: inputs
            }
        );

    };

    var instructions = {
        hlf: function(inputs)
        {
            var register = inputs;
            registers[register] = Math.floor(registers[register] / 2);
            console.log("hlf - " + inputs + " : " + registers[register]);
            return 1;
        },
        tpl: function(inputs)
        {
            var register = inputs;
            registers[register] = registers[register]*3;
            console.log("tpl - " + inputs + " : " + registers[register]);
            return 1;
        },
        inc: function(inputs)
        {
            var register = inputs;
            registers[register] = registers[register] + 1;
            console.log("inc - " + inputs + " : " + registers[register]);
            return 1;
        },
        jmp: function(inputs)
        {
            console.log("jmp - " + inputs);
            return parseInt(inputs);
        },
        jie: function(inputs)
        {
            var register = inputs[0];
            var steps = parseInt(inputs.substr(3,inputs.length));
            console.log("jie - " + inputs + " register: " + register + " steps: " + steps);

            if(registers[register] % 2 === 0)
            {
                return steps;

            } else
            {
                return 1;
            }
        },
        jio: function(inputs)
        {
            var register = inputs[0];
            var steps = parseInt(inputs.substr(3,inputs.length));
            console.log("jie - " + inputs + " register: " + register + " steps: " + steps);

            if(registers[register] === 1)
            {
                return steps;

            } else
            {
                return 1;
            }
        },

    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d23i.txt')
    });

    rl.on('line', inputLine);

    rl.on('close', function()
    {
        var command = 0;
        while(command < programLines.length)
        {
            command += programLines[command].instruction(programLines[command].inputs);
        }
        console.log(registers);
    });

})();
