/*
Advent of Code
Day 6
Problem 1

Input: d06i.txt
*/
(function(){
'use strict';


    var start_setting = false;
    var lightmap = [];
    for(var i = 0; i < 1000; i++)
    {
        var row = [];
        for(var j = 0; j < 1000; j++)
        {
            row.push(start_setting);
        }

        lightmap.push(row);
    }


    var apply = function(start, end, setting)
    {
        for(var x = parseInt(start[0]); x <= parseInt(end[0]); x++){
            for(var y = parseInt(start[1]); y <= parseInt(end[1]); y++){
                lightmap[x][y] = setting;
            }
        }
    };


    var toggle = function(start, end)
    {
        for(var x = parseInt(start[0]); x <= parseInt(end[0]); x++){
            for(var y = parseInt(start[1]); y <= parseInt(end[1]); y++){
                lightmap[x][y] = lightmap[x][y] ? false : true;
            }
        }
    };

    var get_sum = function()
    {
        var total = 0;
        for(var i = 0; i < 1000; i++)
        {
            for(j = 0; j < 1000; j++)
            {
                if(lightmap[i][j]) { total += 1;}
            }
        }
        return total;
    };

    var instruct = function(instruction) {
        var split = instruction.split(" ");

        if(split.length == 4)
        {
            var start = split[1].split(",");
            var end = split[3].split(",");
            toggle(start, end);
        } else {
            var setting = split[1] == "on" ? true : false;
            var start = split[2].split(",");
            var end = split[4].split(",");
            apply(start, end, setting);
        }

        // console.log(get_sum());
    };



    /*
        Main:
        read file
        apply instructions to lights
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d06i.txt')
    });

    rl.on('line', instruct);

    rl.on('close', function()
    {
        console.log("Answer: " + get_sum());
    });


    // lights.instruct("turn on 0,0 through 1,1");
    // lights.instruct("turn on 2,2 through 3,3");
    // lights.instruct("toggle 1,1 through 3,3");
    // console.log(lights.get_sum());

})();

