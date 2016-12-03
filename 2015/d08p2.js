/*
Advent of Code
Day 8
Problem 2

Input: d08i.txt
*/

(function()
{
    // Running tally of characters required for code and in memory
    var inputChars = 0;
    var encodeChars = 0;

    var countLine = function(text)
    {
        var inputLength = text.length;
        inputChars += inputLength;

        var encodeText = text.substring(1,text.length-1);
        encodeText = encodeText.replace(/\\/g,"!!");

        encodeText = encodeText.replace(/\"/g,"@@");

        hexCodeMatches = encodeText.match(/[\\][x]/g);
        hexCodeMatches = hexCodeMatches !== null ? hexCodeMatches.length : 0;

        //+6 for the ecoded quotes on the ends
        var chars = encodeText.length + 6 - hexCodeMatches*3;

        // console.log(text + " " + doubleSlashMatches + " " + slashQuoteMatches + " " + hexCodeMatches + " - " + text.length + " " + chars);
        console.log(text+ " : " + encodeText + " - " + inputLength + " " + chars);

        encodeChars += chars;
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
        console.log("Encode: " + encodeChars);
        console.log("Input : " + inputChars);
        console.log("Total : " + (encodeChars-inputChars));

    });
})();
