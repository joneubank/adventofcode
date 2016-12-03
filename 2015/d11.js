/*
Advent of Code
Day 11
*/

(function()
{
'use strict';

    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character +
               this.substr(index+character.length);
    };

    /* ===============
    *   Passwird logic
    *  =============== */

    // Return true/false or password contains one sequence of 3 increasing
    //  chars, like "abc" or "xyz"
    var straightCheck = function(pwd)
    {
        for(var i = 0; i < pwd.length - 2; i++)
        {
            if( pwd.charCodeAt(i)      + 1 === pwd.charCodeAt(i+1) &&
                pwd.charCodeAt(i+1) + 1 === pwd.charCodeAt(i+2)
              )
            {
                return true;
            }
        }
        return false;
    };

    // Return false if password contains 'i', 'l', or 'o'
    var exclusionCheck = function(pwd)
    {
        return pwd.match(/[iol]/g) === null;
    };

    // Return true if password has two distinct pairs
    var pairCheck = function(pwd)
    {
        return pwd.match(/([a-z])\1.*([a-z])\2/g) !== null;
    };

    var isValid = function(pwd)
    {
        var hasStraight = straightCheck(pwd);
        var hasValidChars = exclusionCheck(pwd);
        var hasPairs = pairCheck(pwd);

        return hasStraight && hasValidChars && hasPairs;
    };

    var increment = function(prev)
    {
        var len = prev.length;
        var next = prev;

        for(var i = 1; i <= len; i++)
        {
            var nextCharCode = next.charCodeAt(len-i)+1;
            if(nextCharCode === 97+26) {
                next = next.replaceAt(len-i, "a");
            } else
            {
                if( nextCharCode === 'i'.charCodeAt(0) ||
                    nextCharCode === 'l'.charCodeAt(0) ||
                    nextCharCode === 'o'.charCodeAt(0)
                  )
                {
                    nextCharCode += 1;
                }
                next = next.replaceAt(
                            len-i,
                            String.fromCharCode(nextCharCode)
                        );
                break;
            }
        }
        return next;
    };

    var getNext = function(prev){
        var maxLoops = 10000000000;
        var loop = 0;
        var next = increment(prev);

        while(loop < maxLoops)
        {
            // console.log(next);
            if(isValid(next)) { break; }
            loop += 1;
            next = increment(next);
        }

        if(loop >= maxLoops)
        {
            return "FAIL";
        }
        return next;
    };


    /* ===============
    *   Main Execution Code
    *  =============== */
    var p1startPwd = "cqjxjnds";
    console.log("P1 Start: " + p1startPwd);
    var p1nextPwd = getNext(p1startPwd);
    console.log("P1 Answer: " + p1nextPwd);

    var p2startPwd = p1nextPwd;
    console.log("P2 Start: " + p2startPwd);
    var p2nextPwd = getNext(p2startPwd);
    console.log("P2 Answer: " + p2nextPwd);
})();
