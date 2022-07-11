# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
user_str = (input("Enter a word with 10 characters:"))
if len(user_str) < 10:
    (input("Not enough characters. Enter a word with 10 characters: "))
elif len(user_str) > 10:
   (input("Too long word. Enter a word with 10 characters: "))
else:
    print(user_str[0])
    print(user_str[-1])

# Then, print the first and last characters of the given text.
# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
output_str = ""
for character in user_str:
    output_str =+character
    print(output_str)
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod