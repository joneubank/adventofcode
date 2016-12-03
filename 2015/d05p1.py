'''
Advent of Code : Day 4
Problem : 1

Input d05i.py
'''
import re


def getFileLines(filename):

    with open(filename) as f:
        lines = [line.rstrip('\n') for line in f]

    return lines


def test_word(word):
    vowel_re = re.compile(r'([aeiou].*){3,}', re.IGNORECASE)
    vowel_search = vowel_re.search(word)

    double_re = re.compile(r'([a-z])\1', re.IGNORECASE)
    double_search = double_re.search(word)

    exclude_re = re.compile(r'(ab|cd|pq|xy)')
    exclude_search = exclude_re.search(word)

    if double_search and vowel_search and not exclude_search:
        return True
    else:
        return False


if __name__ == '__main__':
    # print(test_word("haegwjzuvuyypxabu"))

    inputs = getFileLines("d05i.txt")

    nice_strings = 0
    for word in inputs:
        if test_word(word):
            nice_strings += 1

    print("Answer: %d" % (nice_strings))
