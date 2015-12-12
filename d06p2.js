/*
Day 6
Problem 2

Input: d06i.txt

Switching Scripting Languages to JS for Problems 6-10

*/
(function(){
// 'use strict';

    var lights = (function() {

        var start_setting = 0;
        var lightmap = [];
        for(i = 0; i < 1000; i++)
        {
            var row = [];
            for(j = 0; j < 1000; j++)
            {
                row.push(start_setting);
            }

            lightmap.push(row);
        }

        var apply = function(start, end, setting)
        {
            for(x = parseInt(start[0]); x <= parseInt(end[0]); x++){
                for(y = parseInt(start[1]); y <= parseInt(end[1]); y++){
                    lightmap[x][y] += setting;
                    if(lightmap[x][y] < 0) { lightmap[x][y] = 0;}
                }
            }
        };
        var toggle = function(start, end)
        {
            for(x = parseInt(start[0]); x <= parseInt(end[0]); x++){
                for(y = parseInt(start[1]); y <= parseInt(end[1]); y++){
                    lightmap[x][y] += 2;
                }
            }
        };

        var get_sum = function()
        {
            var total = 0;
            for(i = 0; i < 1000; i++)
            {
                for(j = 0; j < 1000; j++)
                {
                    total += lightmap[i][j];
                }
            }
            return total;
        };

        var instruct = function(instruction) {
            split = instruction.split(" ");

            if(split.length == 4)
            {
                start = split[1].split(",");
                end = split[3].split(",");
                toggle(start, end);

            } else {
                setting = split[1] == "on" ? 1 : -1;
                start = split[2].split(",");
                end = split[4].split(",");
                apply(start, end, setting);
            }

            // console.log(get_sum());
        };

        return {
            instruct : instruct,
            get_sum : get_sum
        };

    })();

    /*
        Main:
        read file
        apply instructions to lights
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d06i.txt')
    });

    rl.on('line', lights.instruct);

    rl.on('close', function()
    {
        console.log("Answer: " + lights.get_sum());
    });


    // lights.instruct("turn on 0,0 through 1,1");
    // lights.instruct("turn on 2,2 through 3,3");
    // lights.instruct("toggle 1,1 through 3,3");
    // console.log(lights.get_sum());

})();

