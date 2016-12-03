/*
Advent of Code
Day 22
Problem 2

Input: boss = {hp:51, dmg: 9;}
*/

(function()
{
'use strict';

    /*
    *  GAME LOGIC
    */

    var spells = ['missile', 'drain', 'shield', 'poison', 'recharge'];


    function applyEffects(state)
    {
        if(state.poison > 0)
        {
            state.poison -= 1;
            state.bossHp -= 3;
        }

        if(state.shield > 0)
        {
            state.shield -= 1;
        }

        if(state.recharge > 0)
        {
            state.recharge -= 1;
            state.mana += 101;
        }
    }

    //player turn then boss turn
    function simTurn(state, spell)
    {
        var next = {
            bossHp: state.bossHp,
            hp: state.hp,
            mana: state.mana,
            poison: state.poison,
            shield: state.shield,
            recharge: state.recharge,
            cost: state.cost
        };

        //PLAYER TURN
        next.hp -= 1;
        if(next.hp <= 0)
        {
            return next;
        }

        applyEffects(next);

        // cast spell
        if (spell === 'missile')
        {
            next.mana -= 53;
            next.cost += 53;
            next.bossHp -= 4;

        } else if(spell === 'drain')
        {
            next.mana -= 73;
            next.cost += 73;
            next.bossHp -= 2;
            next.hp += 2;

        } else if(spell === 'shield')
        {
            next.mana -= 113;
            next.cost += 113;
            next.shield = 6;
        } else if(spell === 'poison')
        {
            next.mana -= 173;
            next.cost += 173;
            next.poison = 6;

        } else if(spell === 'recharge')
        {
            next.mana -= 229;
            next.cost += 229;
            next.recharge = 5;
        }

        //MONSTER TURN
        //apply effects, save shield state
        applyEffects(next);

        //monster attack
        if(next.shield > 0)
        {
            next.hp -= 2;

        } else
        {
            next.hp -= 9;
        }

        return next;
    }

    function spellValid(state, spell)
    {
        // cast spell
        if (spell === 'missile')
        {
            if (state.mana >= 53) {return true;}
            else {return false;}

        } else if(spell === 'drain')
        {
            if (state.mana >= 73) {return true;}
            else {return false;}

        } else if(spell === 'shield')
        {
            if (state.mana >= 113 && state.shield <= 1) {return true;}
            else {return false;}

        } else if(spell === 'poison')
        {
            if (state.mana >= 173 && state.poison <= 1) {return true;}
            else {return false;}

        } else if(spell === 'recharge')
        {
            if (state.mana >= 229 && state.recharge <= 1) {return true;}
            else {return false;}
        }
    }

    /*
    *  FIND SOLUTION
    */

    var startState = {bossHp: 51, hp:50, mana:500, poison: 0, shield: 0, recharge: 0, cost: 0};
    var states = [startState];
    var minWinCost = -1;
    var steps = 0;

    function cheapestState(list)
    {
        var lowest = -1;
        for(var i = 0; i < list.length; i++){
            if(lowest === -1 || list.cost < lowest)
            {
                lowest = list.cost;
            }
        }
        return lowest;
    }

    while(minWinCost === -1 || cheapestState(states) < minWinCost)
    {
        //console logging for testing
        console.log(steps+ ": states.length = " + states.length);
        if(steps === 10)
        {
            console.log(states);
            break;
        }


        var nextStates = [];
        for(var stateIndex = 0; stateIndex < states.length; stateIndex++)
        {
            for(var spellIndex = 0; spellIndex < spells.length; spellIndex++)
            {
                var state = states[stateIndex];
                var spell  = spells[spellIndex];

                if( spellValid(state, spell) )
                {
                    var next = simTurn(state, spell);

                    if(next.bossHp <= 0)
                    {
                        console.log("winner: " + next.cost);
                        if(next.cost < minWinCost || minWinCost === -1)
                        {
                            minWinCost = next.cost;
                        }
                    } else if (next.hp > 0)
                    {
                        nextStates.push(next);
                    }
                }
            }
        }
        states = nextStates;

        if(nextStates.length === 0)
        {
            console.log("Out of valid options.");
            break;
        }

        steps += 1;
    }
    console.log("minWinCost: " + minWinCost);

})();
