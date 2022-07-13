# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
import enum


number = int(input("Enter a number"))
lenght = int(input("Enter a number"))
multiples = []
for i in range(0,number):
    mult_num = (i * number)
    multiples.append(mult_num)
print(multiples)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
user_str = "ppoeemm"
word_l = list(user_str)
new_str = ""
first_latter = word_l[0]
compare_letter = ""
for i,char in enumerate(user_str)
    if len(new_str) == 0:
        new_str = char
        compare_letter = char
    elif char == compare_letter
