def getFileContent(filename):

    out = ""
    with open(filename) as f:
        for line in f:
            out += line.rstrip('\n')

    return out

if __name__ == '__main__':
    data = getFileContent("d03in.txt")

    iters = 0

    pos = [0,0]
    visited = set()
    visited.add(tuple(pos))
    for char in data:
        iters += 1
        if char == "^":
            pos[1] += 1
        elif char == "v":
            pos[1] -= 1
        elif char == "<":
            pos[0] -= 1
        elif char == ">":
            pos[0] += 1

        visited.add(tuple(pos))

        # print("pos: " + str(pos) + " - visited: " + str(visited))
    print("Houses Visited: " + str(len(visited)))
