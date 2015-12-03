def getFileContent(filename):

    out = ""
    with open(filename) as f:
        for line in f:
            out += line.rstrip('\n')

    return out

if __name__ == '__main__':
    data = getFileContent("d03in.txt")

    iters = 0

    usePos = [0,0]
    storePos = [0,0]

    visited = set()
    visited.add((0,0))
    for char in data:

        temp = usePos
        usePos = storePos
        storePos = temp

        iters += 1
        if char == "^":
            usePos[1] += 1
        elif char == "v":
            usePos[1] -= 1
        elif char == "<":
            usePos[0] -= 1
        elif char == ">":
            usePos[0] += 1

        visited.add(tuple(usePos))

        # print("pos: " + str(pos) + " - visited: " + str(visited))
    print("Houses Visited: " + str(len(visited)))
