/*
Advent of Code
Day 9
Problem 2

Input: d09i.txt
*/

(function()
{
'use strict';


    /* ===============
    *   Process Inputs
    *  =============== */

    /*
    *   nodes will store city names as the keys, with objects taht contain
    *       other city names with their distances from them.
    */
    var nodes = {};

    /*
    *   cities keeps list of unique city names, used for making permutations
    */
    var cities = [];

    var connectNodes = function(start, end, distance)
    {
        if(!nodes[start])
        {
            nodes[start] = {};
        }

        nodes[start][end] = distance;
    }


    var addConnection = function(text)
    {
        var split       = text.split(" ");
        var city1       = split[0];
        var city2       = split[2];
        var distance    = parseInt(split[4]);

        if(cities.indexOf(city1) < 0) {cities.push(city1);}
        if(cities.indexOf(city2) < 0) {cities.push(city2);}

        // add city1 -> city2
        connectNodes(city1, city2, distance);
        connectNodes(city2, city1, distance);
    };


    /* ======================
    *   Calculate Distances
    *  ====================== */
    var maxDistance = 0;

    var checkDistance = function(array)
    {
        var distance = 0;
        var start;
        var end;
        for(var i = 0; i < array.length-1; i++)
        {
            start = array[i];
            end = array[i+1];
            distance += nodes[start][end];
        }
        if(distance > maxDistance) {
            console.log(array + " " + distance);
            maxDistance = distance;
        }
    };

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

    var findPath = function()
    {
        permutations([], cities, checkDistance);
    };

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d09i.txt')
    });

    rl.on('line', addConnection);

    rl.on('close', function()
    {
        findPath();
        console.log(maxDistance);
    });
})();
