# adventofcode
[Advent of Code](http://adventofcode.com) 2015 Code Challenge Game Responses

## Completion Summary

**Total Score:** 47

| Day | Puzzle 1 | Puzzle 2 | Tools |
|:---:|:--------:|:--------:|:----- |
| 1 | x | x | Python |
| 2 | x | x | Python |
| 3 | x | x | Python |
| 4 | x | x | Python, hashlib library for md5 generation |
| 5 | x | x | Python, re regex puzzle |
| 6 | x | x | Node.js, require('readline') for input reading|
| 7 | x | x | Node.js |
| 8 | x | x | Node.js |
| 9 | x | x | Node.js |
| 10 | x | x | Node.js |
| 11 | x | x | Node.js |
| 12 | x | x | Node.js |
| 13 | x | x | Node.js |
| 14 | x | x | Node.js |
| 15 | x | x | Node.js |
| 16 | x | x | Node.js |
| 17 | x | x | Node.js |
| 18 | x | x | Node.js |
| 19 | x | | Node.js |
| 20 | x | x | Node.js |
| 21 | x | x | Node.js |
| 22 | x | x | Node.js |
| 23 | x | x | Node.js |
| 24 | x | x | Node.js |
| 25 | | | |

## Puzzles and Notes

### Day 1:
Input is String of '(' and ')' characters. '(' is +1, ')' is -1.

**P1:** add up total of input

**P2:** find index (starting from 1) of first instance where running total = -1


### Day 2:
Wrapping paper and ribbon calculations. Input is list of rectangular gift
dimensions.

Each solution has a formula to calculate required paper or ribbon.
Final answer for each is sum across all boxes


### Day 3:
Input is list of characters each corresponding to a vector (up, down, left, right). Each instruction moves a current position vector, and that position is added to a set. Coordinates can be visited multiple times, but are only listed once in the set.

**P1**: Output length of set at completion, number of unique locations visited

**P2**: Same as P1 but use 2 locations, and alternate instructions to one position or the other. every visited position is still added to the set. output is still number of unique coordinates visited.


### Day 4:
Mining for hashcodes. Given half an input, find an integer for the second half that will generate an MD5 hashcode with the desired pattern (number of leading 0's). Used python built in hashlib library to generate the MD5 hashcodes from candidate keys, brute force method to find lowest.

**P1**: pattern to match was 5 leading 0's : "00000"

**P1**: pattern to match was 6 leading 0's : "000000"

### Day 5:
Regex Puzzles, find number of the inputs that match the rules. With multiple rules, test each independently for each input and only add to count if each test passes.

**P1**: 3 vowels, a double letter, exclude strings

**P2**: Repeated double letter, pattern with "aba"

### Day 6:
*Switching to JS for next few problems to practice different scripting language. Scripts running on nodeJS.*

Matrix of values updated based on list of instructions that must be parsed. Parse each instruction and modify matrix appropriately then find sum in the matrix.

**P1**: Turn on and off or toggle "lights"

**P2**: Each light has a brightness value that goes up (+1, or +2) or down (-1, never less than 0)

### Day 7:
Amazing puzzle, got to use a recursive bottom up solving approach.

Given a set of instructions for wiring 16-bit binary logic gates, solve the signal received at a specific node in the circuit. Code up an instruction data model, parse each instruction and store in a list as outputLabel={instructions for solving outputValue}. To get output value, you need to getValue of the inputs, if they havent been calculated you will get the value of their inputs, which will need to be calculated, and so on until all required nodes have been solved.

**P1**: Solve for a node

**P2**: Solve for a node, reset the circuit with output of that as the set value for a specific node, resolve for a node

### Day 8
Lame replacing and counting for simple escape character encoding.

**P1**: Decode
**P2**: Encode

### Day 9
Traveling Salesman Problem - Small enough we can brute force. Write a method to find permutations of list and check distance for each permutation. There's a neat recursive method for finding permutations here with a callback to execute code when each permutation is found.

**P1**: Simple version of problem, test all routes, if longer than current shortest then stop checking and go to next permutation
**P2**: Same as P1 but find the longest route.

### Day 10
Simple string manipulation, repeat for x steps and print answer. Both problems combined in single file

### Day 11
Alpha string incrementing letters. Testing each combination to see if it passes a set of regex/pattern rules. Both problems combined in one file as its the same problem twice.

### Day 12
JSON format input, recursively loop through object to sum all numbers that are found. Part 2 involves checking for specific values to filter objects from being added to the total.

### Day 13
Another permutations puzzle. Test all the arrangements and find the max sum.

### Day 14
Reindeer race. Simple math applied to find winner. This is not an elegant solution, just quick and dirty.

### Day 15
Recipe problem with constraints. Find maximum of 2D matrix system. There is probably a sensible math way to do this but I just brute forced it since the number of variables was quite small.

P2 is P1 with one additional qualifier for a valid solution (only consider a recipe's total score if it has exact correct number of calories)

### Day 16
Compare input object to list of partial objects. If inequality is found reject the input, keep only the one match. Part two changes the equality conditions.

Part 2 gave two solutions, the same as part 1 and a new solution. I didn't spend time solving what I missed that allowed for 2 solutions, I just submitted the new one and it was correct.

### Day 17
Combinations of jars to make a set volume. Recursive combinations method, similar to but different than the permutations method from earlier.

### Day 18
Conway's game of life implementation.

### Day 19
So far unable to solve P2 since brute force is too long and I haven't come up with a suitable way to reduce the checks made at every step.

### Day 20
Common Factor counting and summation. Problem 2 requires filtering the common factor list so that factor * x = num where x <= 50.

### Day 21
RPG Simulator! Equip player, calc stats, determine if they win the fight. Small number of permutations so just iterate all of them to find the ones that match the puzzle requirements.

### Day 22
RPG Wizard Spell selector... Breadth first search through sequence of actions to take, identifying winning pattern with the lowest cost. Takes 7 steps through brute force, no more than 10000 saved sequences so this worked fine.

### Day 23
Read instructions, apply logic to stored numbers. Nothing fancy here, just implementation. Only one file added because P2 is just P1 with different starting conditions.

### Day 24
Combinations problem. Can reduce the run time by starting with the options sorted highest to lowest since we most want to find the group with fewest items, and we refuse to check any groupings with more packages than our best solution so far.

For part 2, its obvious we should have an extra system to make it recursive based on the number of groups desired, but it was faster in this case just to copy paste the same pattern for the extra group.
