def getFileLines(filename):

    with open(filename) as f:
        lines = [line.rstrip('\n') for line in f]

    return lines

'''
paperForBox(dims)
return: number representing ft^2 of wrapping paper needed for a box of the
          provided dimensions. area is surface area of rigth rectangular prism
          plus the area of the smallest side
input:
        dims - 3 element array

'''
def paperForBox(dims):
    sides = [dims[0]*dims[1], dims[1]*dims[2], dims[2]*dims[0]]
    smallSide = min(sides)

    out = sum(sides)*2 + smallSide
    return out


def problem(inputLines):
    paperArea = 0
    for line in inputLines:
        dims = [int(dim) for dim in line.split("x")]
        boxPaper = paperForBox(dims)
        paperArea += boxPaper
        print(str(dims) + " = " + str(boxPaper))

    print("Total Paper Area: " + str(paperArea))
    return paperArea


def testMain():
    testIn = ["2x3x4", "1x1x10"]
    testOut = [58, 43]

    testAll = problem(testIn)
    print("All: " + str(testAll) + "  - vs: " + str(sum(testOut)))


if __name__ == '__main__':
    # testMain()
    data = getFileLines("d02in.txt")
    result = problem(data)
    print("Result: " + str(result))

