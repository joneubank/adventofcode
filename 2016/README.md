# adventofcode 2016

> Santa's sleigh uses a very high-precision clock to guide its movements, and the clock's oscillator is regulated by stars. Unfortunately, the stars have been stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve all fifty stars by December 25th.

> Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

## Progress Summary

**Total Score:** 4

| Day | Puzzle 1 | Puzzle 2 | Notes |
|:---:|:--------:|:--------:|:----- |
| 1 | X | X | NORTH=[0,1], WEST=[-1,0] etc. - determine next direction based on R/L turns |
| 2 | X | X | More cartesian coordinate movements |
| 3 |  |  |  |


## Puzzles and Notes

### Day 1:
Give R/L turn and number of steps, find final destination on grid

**P1:** Map R/L turns to direction unit vectors and iterate through steps updating an (x,y) position. Write a method to chose next direction based on a turn direction. There are "mathy" ways to do this, using imaginary numbers for instance (multiply by i for R, by -i for L, sum absolute quantity of Normal and Imaginary parts). This is simpler to read through in python though.

**P2:** Find first position visited twice. Since the instruction list is relatively short with low integers, just reworked the same solution to record every grid position visited along the path into an array. Checked this array at every step to see if there was a position already visited. This is just quick brute force in favour of finding line segment intersections which could be optimized for a larger list.


### Day 2:
Given U/D/L/R that represent movements around a cartesian grid. Ignore directions that move you off the limited size grid.
