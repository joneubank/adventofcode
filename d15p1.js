/*
Advent of Code
Day 15
Problem 1

Input: d15i.txt

Notes:
Easy solution is just to brute force a solution
Second easiest is brute force with elminating obviously bad combinations
Better would be to use some sort of matrix with gradient descent, but that
    would take longer to sort out than I want to apply to this right now

Cause only 4 ingredients brute force will work fine, trying to quickly
    eliminate sets of obviously impossible solutions
*/

(function()
{
'use strict';

    var ingredients = [];
    var addIngredient = function(text)
    {
        var split = text.split(" ");
        var data  = {};
        data.c = parseInt(split[2]);
        data.d = parseInt(split[4]);
        data.f = parseInt(split[6]);
        data.t = parseInt(split[8]);
        data.cal = parseInt(split[10]);
        ingredients.push(data);
    };


    var maxValue = 0;
    var calcValue = function(recipe)
    {
        var totals = {};
        totals.c = 0;
        totals.d = 0;
        totals.f = 0;
        totals.t = 0;
        totals.cal = 0;
        for (var i = 0; i < ingredients.length; i++)
        {
            totals.c += recipe[i]*ingredients[i].c;
            totals.d += recipe[i]*ingredients[i].d;
            totals.f += recipe[i]*ingredients[i].f;
            totals.t += recipe[i]*ingredients[i].t;
            totals.cal += recipe[i]*ingredients[i].cal;


        }
        if ( totals.c <= 0 ||
             totals.d <= 0 ||
             totals.f <= 0 ||
             totals.t <= 0
           )
        {
            return 0;
        }

        var total = totals.c*totals.d*totals.f*totals.t;
        if(total > maxValue)
        {
            maxValue = total;
            console.log(total);
        }

        return total;
    };

    var mixturePermutations = function(recipe, ingredientsToAdd, maxVolume, action)
    {
        var newRecipe = [].concat(recipe);
        if(ingredientsToAdd === 1)
        {
            newRecipe.push(maxVolume);
            action(newRecipe);
        } else
        {
            var index = newRecipe.length;
            var ingredientsLeft = ingredientsToAdd - 1;
            for(var i = 0; i <= maxVolume; i++)
            {
                newRecipe[index] = i;
                mixturePermutations(newRecipe, ingredientsLeft, maxVolume-i, action);
            }
        }
    };


    var findRecipe = function()
    {
        mixturePermutations([], ingredients.length, 100, calcValue);
    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d15i.txt')
    });

    rl.on('line', addIngredient);

    rl.on('close', function()
    {
        findRecipe();
        console.log(maxValue);
    });

})();
