# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
def sort_words():
    words = ('without,hello,bag,world')
    separated_words1 = words.split(',')
    sorted_words = sorted(separated_words1)
    print(sorted_words)

sort_words()
