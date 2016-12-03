/*
Advent of Code
Day 12
Problem 1

Input: d012i.json
*/

(function()
{
'use strict';

    var total = 0;

    var recursiveGetNums = function(obj)
    {
        var keys = Object.keys(obj);
        for(var i = 0; i < keys.length; i++)
        {
            var item = obj[keys[i]];
            if(typeof(item) === 'object')
            {
                // console.log("Object Found: " + item);
                recursiveGetNums(item);
            } else if(typeof(item) === 'number')
            {
                console.log("Number Found: " + item);
                total += parseInt(item);
            }
        }
    };


    /* ===============
    *   Read Input and Main Logic
    *  =============== */
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('d12i.json', 'utf8'));
    recursiveGetNums(obj);
    console.log(total);
})();
