# adventofcode
[Advent of Code](http://adventofcode.com) 2015 Code Challenge Game Responses

## Completion Summary

**Total Score:** 22

| Day | Puzzel 1 | Puzzel 2 | Tools |
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
| 12 | | | |
| 13 | | | |
| 14 | | | |
| 15 | | | |
| 16 | | | |
| 17 | | | |
| 18 | | | |
| 19 | | | |
| 20 | | | |
| 21 | | | |
| 22 | | | |
| 23 | | | |
| 24 | | | |
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
