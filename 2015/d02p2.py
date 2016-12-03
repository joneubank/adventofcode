def getFileLines(filename):

    with open(filename) as f:
        lines = [line.rstrip('\n') for line in f]

    return lines

'''
ribbonForBox(dims)
return: number representing ft ribbon needed for a box of the
          provided dimensions. length is smallest perimeter of all faces plus
          cubic volume of box
input:
        dims - 3 element array

'''
def ribbonForBox(dims):
    out = (sum(dims)-max(dims))*2 + dims[0]*dims[1]*dims[2]
    return out


def problem(inputLines):
    lengthRibbon = 0
    for line in inputLines:
        dims = [int(dim) for dim in line.split("x")]
        boxRibbon = ribbonForBox(dims)
        lengthRibbon += boxRibbon
        print(str(dims) + " = " + str(boxRibbon))

    print("Total Ribbon Length: " + str(lengthRibbon))
    return lengthRibbon


def testMain():
    testIn = ["2x3x4", "1x1x10"]
    testOut = [34, 14]

    testAll = problem(testIn)
    print("All: " + str(testAll) + "  - vs: " + str(sum(testOut)))


if __name__ == '__main__':
    # testMain()
    data = getFileLines("d02in.txt")
    result = problem(data)

