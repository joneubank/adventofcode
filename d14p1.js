/*
Advent of Code
Day 14
Problem 1

Input: d14i.txt
*/

(function()
{
'use strict';

    var reindeers = {};
    var names = [];
    var addReindeer = function(text)
    {
        var split = text.split(" ");
        var name = split[0];
        var speed = parseInt(split[3]);
        var flyTime = parseInt(split[6]);
        var restTime = parseInt(split[13]);

        names.push(name);
        reindeers[name]          = {};
        reindeers[name].speed    = speed;
        reindeers[name].flyTime  = flyTime;
        reindeers[name].restTime = restTime;

    };

    var calculateDistance = function(reindeer, time)
    {
        var intervalTime = reindeer.flyTime + reindeer.restTime;
        var intervalDistance = reindeer.flyTime*reindeer.speed;
        var intervals = Math.floor(time/intervalTime);

        var distance = intervalDistance*intervals;

        var remainder = time - (intervalTime*intervals);
        if(remainder > reindeer.flyTime)
        {
            distance += intervalDistance;
        } else
        {
            distance += reindeer.speed*remainder;
        }
        return distance;
    };


    var findWinner = function(time)
    {
        var farthest = 0;
        for(var i = 0; i < names.length; i++)
        {
            var distance = calculateDistance(reindeers[names[i]], time);
            console.log(names[i] + " " + distance);
            if (distance > farthest)
            {
                farthest = distance;
            }
        }
        return farthest;
    }

    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d14i.txt')
    });

    rl.on('line', addReindeer);

    rl.on('close', function()
    {
        var answer = findWinner(2503);
        console.log("Answer: " + answer);
    });

})();
