/*
Advent of Code
Day 25
Problem 1

Input: row 2978 column 3083
*/

(function()
{
'use strict';

    function coordsToSequence(row, column)
    {
        var count = row + column - 1;
        var output = column;
        for(var i = 1; i < count; i++)
        {
            output += i;
        }

        return output;
    }

    var codeNum = coordsToSequence(2978, 3083);
    console.log("Code Num: " + codeNum);

    var code = 20151125;
    for(var i = 1; i < codeNum; i++)
    {
        code = (code * 252533) % 33554393;
    }

    console.log("Code: " + code);

})();
