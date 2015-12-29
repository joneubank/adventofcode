/*
Advent of Code
Day 21
Problem 1 & 2

Input: see boss below (dmg 8, hp 104, arm 1)
*/

(function()
{
'use strict';

    // From input
    var boss = {
        dmg:8,
        hp:104,
        arm:1
    };

    function createItem(cost, damage, armor)
    {
        return {
            cost:cost,
            dmg: damage,
            arm: armor
        };
    }

/*
Name        cost  damage
Dagger        8     4
Shortsword   10     5
Warhammer    25     6
Longsword    40     7
Greataxe     74     8
*/
    var weapons = [
        createItem(8,  4, 0),
        createItem(10, 5, 0),
        createItem(25, 6, 0),
        createItem(40, 7, 0),
        createItem(74, 8, 0)
    ];

    /*
Armor:      Cost  Damage  Armor
Leather      13     0       1
Chainmail    31     0       2
Splintmail   53     0       3
Bandedmail   75     0       4
Platemail   102     0       5
    */
    //include blank option since this is optional
    var armors = [
        createItem(0,  0,  0),
        createItem(13, 0,  1),
        createItem(31, 0,  2),
        createItem(53, 0,  3),
        createItem(75, 0,  4),
        createItem(102, 0, 5)
    ];

/*
Rings:      Cost  Damage  Armor
Damage +1    25     1       0
Damage +2    50     2       0
Damage +3   100     3       0
Defense +1   20     0       1
Defense +2   40     0       2
Defense +3   80     0       3
*/
    //include 2 blanks since this is optional
    var rings = [
        createItem(0,   0, 0),
        createItem(0,   0, 0),
        createItem(25,  1, 0),
        createItem(50,  2, 0),
        createItem(100, 3, 0),
        createItem(20,  0, 1),
        createItem(40,  0, 2),
        createItem(80,  0, 3)
    ];

    function buildPlayer(weapon, armor, ring1, ring2)
    {

        var cost = weapon.cost + armor.cost + ring1.cost + ring2.cost;
        var dmg = weapon.dmg + armor.dmg + ring1.dmg +ring2.dmg;
        var arm = weapon.arm + armor.arm + ring1.arm +ring2.arm;
        return {
            cost: cost,
            dmg: dmg,
            arm: arm,
            hp: 100
        }
    }

    function turnsToKillBoss(player)
    {
        return Math.ceil(boss.hp / (player.dmg - boss.arm) );
    }

    function turnsToKillPlayer(player)
    {
        return Math.ceil(player.hp / (boss.dmg - player.arm));
    }

    var lowestSuccessCost = 1000;
    var highestFailCost = 0;

    for(var wpn=0; wpn < weapons.length; wpn++)
    {
        for(var armor=0; armor < armors.length; armor++)
        {
            for(var r1=0; r1 < rings.length; r1++)
            {
                for(var r2=r1+1; r2<rings.length; r2++)
                {
                    var player = buildPlayer(weapons[wpn], armors[armor], rings[r1], rings[r2]);

                    if(
                        player.dmg-boss.arm > 0 &&
                        player.cost < lowestSuccessCost &&
                        turnsToKillBoss(player) <= turnsToKillPlayer(player)
                      )
                    {
                        lowestSuccessCost = player.cost;
                    }

                    if(
                        boss.dmg-player.arm > 0 &&
                        player.cost > highestFailCost &&
                        turnsToKillBoss(player) > turnsToKillPlayer(player)
                      )
                    {   player.win = turnsToKillBoss(player);
                        player.lose = turnsToKillPlayer(player);
                        console.log(player);
                        highestFailCost = player.cost;
                    }
                }
            }
        }
    }

    console.log("Best Win Cost: " + lowestSuccessCost);
    console.log("Worst Lose Cost: " + highestFailCost);

})();
