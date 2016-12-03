/*
Advent of Code
Day 13
Problem 1

Input: d13i.txt
*/

(function()
{
'use strict';

    /*
    *   Store Instructions
    */

    /* relations:
    *   set of data objects with the information from the inputs with the
    *       relationship information between guests
    *   keys are the name of the guest
    *   Within the object is a key for each other guest, the value is the
    *       +/- for hapiness for sitting beside them
    */
    var relations = {};
    var guests = [];
    var addRelation = function(text)
    {
        var split = text.split(" ");

        //Get guest name, relation name, and happiness modifier
        var guestName = split[0];
        var relationName = split[10];
        relationName = relationName.substr(0,relationName.length-1);

        var isLose = split[2] === 'lose' ? true : false;
        var mod = parseInt(split[3]);

        if(isLose)
        {
            mod *= -1;
        }

        //put this data into the relations object
        if(!relations[guestName])
        {
            relations[guestName] = {};
            guests.push(guestName);
        }

        relations[guestName][relationName] = mod;
    };


    /*
    *   Determine best arrangement
    */
    var maxHapiness = -1000;
    var permutations = function(sorted, unsorted, action)
    {

        for (var i = 0; i < unsorted.length; i++)
        {
            var permutation = sorted.concat(unsorted[i]);
            var remainder = unsorted.slice(0,i).concat(unsorted.slice(i+1));

            if (remainder.length === 0)
            {
                action(permutation);
            } else
            {
                permutations(permutation, remainder, action);
            }

        }
    };

    var testPermutation = function(list)
    {
        var total = 0;

        var len = list.length;
        for(var i = 0; i < len; i++)
        {
            var guest = list[i];

            var rightIndex = i+1;
            if (i === len-1)
            {
                rightIndex = 0;
            }

            var leftIndex = i-1;
            if (i === 0)
            {
                leftIndex = len-1;
            }

            var right = list[rightIndex];
            var left  = list[leftIndex];

            total += relations[guest][right] + relations[guest][left];
        }
        if(total > maxHapiness)
        {
            maxHapiness = total;
        }
    }

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d13i.txt')
    });

    rl.on('line', addRelation);

    rl.on('close', function()
    {
        permutations([], guests, testPermutation);
        console.log("Answer: " + maxHapiness);
    });

})();
