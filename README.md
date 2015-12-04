# adventofcode
[Advent of Code](http://adventofcode.com) 2015 Code Challenge Game Responses

## Completion Summary

**Total Score:** 8

| Day | Puzzel 1 | Puzzel 2 | Tools |
|:---:|:--------:|:--------:|:----- |
| 1 | x | x | Python |
| 2 | x | x | Python |
| 3 | x | x | Python |
| 4 | x | x | Python, hashlib library for md5 generation |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |
| 11 | | | |
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
