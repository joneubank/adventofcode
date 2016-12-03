/*
Advent of Code
Day 8
Problem 1

Input: d08i.txt
*/

(function()
{
    // Running tally of characters required for code and in memory
    var codeChars = 0;
    var memChars = 0;

    var countLine = function(text)
    {
        var codeLength = text.length;
        codeChars += codeLength;

        var memText = text.substring(1,text.length-1);
        memText = memText.replace(/\\\\/g,"!");

        memText = memText.replace(/\\\"/g,"@");

        hexCodeMatches = memText.match(/[\\][x]/g);
        hexCodeMatches = hexCodeMatches !== null ? hexCodeMatches.length : 0;

        //-2 from quotes on each end of the input strings
        chars = memText.length - hexCodeMatches*3;

        // console.log(text + " " + doubleSlashMatches + " " + slashQuoteMatches + " " + hexCodeMatches + " - " + text.length + " " + chars);
        console.log(text+ " : " + memText + " - " + codeLength + " " + chars);

        memChars += chars;
    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d08i.txt')
    });

    rl.on('line', countLine);

    rl.on('close', function()
    {
        console.log("Code  : " + codeChars);
        console.log("Mem   : " + memChars);
        console.log("Total : " + (codeChars-memChars));

    });
})();
