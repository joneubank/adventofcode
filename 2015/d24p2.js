/*
Advent of Code
Day 23
Problem 1 & 2

Input: d23i.txt
*/

(function()
{
'use strict';

    var fewestPackages = -1;
    var smallestQE = -1;
    var packages = [];
    var inputLine = function(text)
    {
        packages.push(parseInt(text));
    };

    function arraySum(list)
    {
        if(list.length === 0) {return 0;}
        return list.reduce(function(total, current){return total + current;});
    }

    function arrayProduct(list)
    {
        if(list.length === 0) {return 0;}
        return list.reduce(function(total, current){return total * current;});
    }

    function testGroup(group)
    {
        var qe = arrayProduct(group);
        if(fewestPackages === -1 || group.length <= fewestPackages) {
            fewestPackages = group.length;

            // get array product "quantum entaglement"
            if(smallestQE === -1 || qe < smallestQE)
            {
                console.log("New Best: " + group + " qe: " + qe);
                smallestQE = qe;
            }
        }
    }

    function recursiveTest(a, b, c, unsorted, target, action)
    {
        var aSum = arraySum(a);

        if(aSum < target)
        {
            for (var i = 0; i < unsorted.length; i++)
            {
                var nextVal = unsorted[i];
                if( aSum + nextVal <= target &&
                    (a.length === 0 || nextVal > a[a.length-1]) &&
                    (fewestPackages === -1 || a.length < fewestPackages)
                  )
                {
                    var nextA = a.concat(nextVal);
                    var remainder = unsorted.slice(0,i).concat(unsorted.slice(i+1));
                    recursiveTest(nextA, b, c, remainder, target, action);
                }

            }
        } else if (aSum === target)
        {
            var bSum = arraySum(b);
            if(bSum === target)
            {
                var cSum = arraySum(c);
                if(cSum !== target)
                {
                    for(var i = 0; i < unsorted.length; i++)
                    {
                        var nextVal = unsorted[i];
                        if(cSum+nextVal == target)
                        {
                            action(b);
                            b.push(1);

                        }else if(bSum + nextVal < target)
                        {
                            var nextC = c.concat(nextVal);
                            var remainder = unsorted.slice(0,i).concat(unsorted.slice(i+1));
                            recursiveTest(a, b, nextC, remainder, target, action);
                        }
                    }
                }

            } else if (bSum < target)
            {
                for(var i = 0; i < unsorted.length; i++)
                {
                    var nextVal = unsorted[i];
                    if(bSum+nextVal == target)
                    {
                        action(a);
                        a.push(1);

                    }else if(bSum + nextVal < target)
                    {
                        var nextB = b.concat(nextVal);
                        var remainder = unsorted.slice(0,i).concat(unsorted.slice(i+1));
                        recursiveTest(a, nextB, c, remainder, target, action);
                    }
                }
            }
        }
    }


    /*
        Read inputs and evaluate circuit
    */
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream('d24i.txt')
    });

    rl.on('line', inputLine);

    rl.on('close', function()
    {
        var sortedPackages = packages.sort(function(a,b){return b-a;});
        console.log(sortedPackages);
        var groupWeight = arraySum(packages) / 4;

        recursiveTest([], [], [], sortedPackages, groupWeight, testGroup);


        console.log(smallestQE);
    });

})();
