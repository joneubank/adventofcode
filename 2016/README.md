# adventofcode 2016

> Santa's sleigh uses a very high-precision clock to guide its movements, and the clock's oscillator is regulated by stars. Unfortunately, the stars have been stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve all fifty stars by December 25th.

> Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

## Progress Summary

**Total Score:** 10

| Day | Puzzle 1 | Puzzle 2 | Notes |
|:---:|:--------:|:--------:|:----- |
| 1 | X | X | NORTH=[0,1], WEST=[-1,0] etc. - determine next direction based on R/L turns |
| 2 | X | X | More cartesian coordinate movements |
| 3 | X | X | Easiest yet. Triangle side validations. |
| 4 | X | X | Lots of string parsing, and sorting of counts. Final step can't be done programatically since they don't tell you the name of the room you are looking for. |
| 5 | X | X | md5 hash generation |
| 6 |  |  |  |
| 7 |  |  |  |
| 8 |  |  |  |
| 9 |  |  |  |
| 10 |  |  |  |
| 11 |  |  |  |
| 12 |  |  |  |
| 13 |  |  |  |
| 14 |  |  |  |
| 15 |  |  |  |
| 16 |  |  |  |
| 17 |  |  |  |
| 18 |  |  |  |
| 19 |  |  |  |
| 20 |  |  |  |
| 21 |  |  |  |
| 22 |  |  |  |
| 23 |  |  |  |
| 24 |  |  |  |
| 25 |  |  |  |

## Puzzles and Notes

### Day 1:
Give R/L turn and number of steps, find final destination on grid

**P1:** Map R/L turns to direction unit vectors and iterate through steps updating an (x,y) position. Write a method to chose next direction based on a turn direction. There are "mathy" ways to do this, using imaginary numbers for instance (multiply by i for R, by -i for L, sum absolute quantity of Normal and Imaginary parts). This is simpler to read through in python though.

**P2:** Find first position visited twice. Since the instruction list is relatively short with low integers, just reworked the same solution to record every grid position visited along the path into an array. Checked this array at every step to see if there was a position already visited. This is just quick brute force in favour of finding line segment intersections which could be optimized for a larger list.


### Day 2:
Given U/D/L/R that represent movements around a cartesian grid. Ignore directions that move you off the limited size grid.

### Day 3:
Given sets of triangle sides, apply simple validation to confirm they would form a valid triangle.

**NOTE:** The descriptions states that the sum of the two smaller sides must be greater than the largest side, but the solution requires greater OR EQUAL TO.

Part two has an interesting twist, requiring the input to be read in columns. Simply accomplished by reading in line at a time but writing into temporary triangles that are added to the triangle list after 3 sides are added in.

### Day 4:
List of encrypted room names with numeric IDs and checksums.

**P1:** Parse the list of names into names, sector_ids and checksums. Count all letters in the room names and sort them by count and alphabetical order, then compare the first five letters in the sorted list to the checksum. Use of re and operator libraries to do the parsing then sorting on multiple properties.

**P2:** This part is easier to code, just apply a character shift algorithm with looping to the beginning of the alphabet. Problem is the final output just shows list of room names, and you manually have to search throught he list for the room name to find which name is "the room where North Pole objects are stored"... Answer was "northpole object storage"... sigh...

### Day 5:
Very similar to Day 4 of 2015. Generate hash codes from incrementing keys until certain patterns are matched.
