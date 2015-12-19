/*
Advent of Code
Day 10
*/

(function()
{
'use strict';


    /* ===============
    *   Game logic
    *  =============== */
    var gameStep = function(input)
    {
        var output = "";

        var current = input[0];
        var count = 1;

        for(var i = 1; i < input.length; i++)
        {
            var next = input[i];
            if(current === next)
            {
                count += 1;
            } else
            {
                output += count + "" + current;
                current = next;
                count = 1;
            }
        }
        output += count + "" + current;
        return output;
    };


    /* ===============
    *   Main Execution Code
    *  =============== */
    var p1steps = 40;
    var p2steps = 50;
    var startString = "1113222113";

    var p1String = startString;
    for (var i = 0; i < p1steps; i++)
    {
        p1String = gameStep(p1String);
    }
    console.log("P1: " + p1String.length);

    var p2String = startString;
    for (var i = 0; i < p2steps; i++)
    {
        p2String = gameStep(p2String);
    }
    console.log("P2: " + p2String.length);

})();
