'''
Advent of Code : Day 4
Problem : 2

Input d05i.py

'''
import re


def getFileLines(filename):

    with open(filename) as f:
        lines = [line.rstrip('\n') for line in f]

    return lines


def test_word(word):
    print(word)

    #double letter combo
    repeat_re = re.compile(r'([a-z][a-z]).*\1', re.IGNORECASE)
    repeat_search = repeat_re.search(word)

    if repeat_search:
        print("repeat pass")
    else:
        print("repeat fail")

    # xyx pattern
    pattern_re = re.compile(r'([a-z])[a-z]\1', re.IGNORECASE)
    pattern_search = pattern_re.search(word)

    if pattern_search:
        print("pattern pass")
    else:
        print("pattern fail")

    if pattern_search and repeat_search :
        return True
    else:
        return False


if __name__ == '__main__':
    # print(test_word("aayaa"))

    inputs = getFileLines("d05i.txt")

    nice_strings = 0
    for word in inputs:
        if test_word(word):
            nice_strings += 1

    print("Answer: %d" % (nice_strings))
