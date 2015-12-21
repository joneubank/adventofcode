/*
Advent of Code
Day 18
Problem 2

Input: d18i.txt

Note: Conway Game of Life
*/

(function()
{
'use strict';

    var inputMatrix = [];
    var addRow = function(text)
    {
        var row = [];
        for(var i = 0; i < text.length; i++)
        {
            var state = text[i] === '#' ? true : false;
            row.push(state);
        }
        inputMatrix.push(row);
    };

    var nextState = function(x, y, matrix)
    {
        var neighbours = 0;

        //set corners permanently on
        if( (x === 0  && y === 0 ) ||
            (x === 0  && y === 99) ||
            (x === 99 && y === 0 ) ||
            (x === 99 && y === 99)
          )
        {
            return true;
        }

        for(var i = -1; i <= 1; i++)
        {
            for(var j = -1; j <= 1; j++)
            {
                if(!(i === 0 && j === 0))
                {
                    var checkx = x + i;
                    var checky = y + j;

                    if(
                        checkx >= 0 && checkx < matrix.length &&
                        checky >= 0 && checky < matrix[checkx].length &&
                        matrix[checkx][checky]
                      )
                    {
                        neighbours += 1;
                    }
                }
            }
        }
        if(  neighbours === 3 ||
            (neighbours === 2 && matrix[x][y])
          )
        {
            return true;
        } else
        {
            return false;
        }

    };

    var count = function(matrix)
    {
        var total = 0;
        for(var i = 0; i < matrix.length; i++)
        {
            for(var j = 0; j < matrix[i].length; j++)
            {
                if(matrix[i][j])
                {
                    total += 1;
                }
            }
        }
        return total;
    };

    var print = function(matrix)
    {
        for(var i = 0; i < matrix.length; i++)
        {
            var line = "";
            for(var j = 0; j < matrix[i].length; j++)
            {
                line += matrix[i][j] ? "X" : ".";
            }
            console.log(line);
        }

    };

    var step = function(matrix)
    {
        var nextMatrix = [];

        for(var i = 0; i < matrix.length; i++)
        {
            nextMatrix.push([].concat(matrix[i]));
            for(var j = 0; j < matrix[i].length; j++)
            {
                nextMatrix[i][j] = nextState(i, j, matrix);
            }
        }

        return nextMatrix;
    };


    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d18i.txt')
    });

    rl.on('line', addRow);

    rl.on('close', function()
    {
        //set corners on
        inputMatrix[0][0] = true;
        inputMatrix[99][0] = true;
        inputMatrix[99][99] = true;
        inputMatrix[0][99] = true;

        var matrix = [].concat(inputMatrix);
        for(var i=0; i < 100; i++)
        {
            matrix = step(matrix);
        }
        print(matrix);
        console.log("Answer: " + count(matrix));
    });

})();
