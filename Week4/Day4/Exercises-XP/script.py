# from random import randint
# import string
# # Exercise 1 : What Are You Learning ?
# # Instructions
# # Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# # Call the function, and make sure the message displays correctly.
# MY CODE:
# def display_message():
#     print("I am studying Full-Stack development and Python")
# display_message()

# # 🌟 Exercise 2: What’s Your Favorite Book ?
# # Instructions
# # Write a function called favorite_book() that accepts one parameter called title.
# # The function should print a message, such as "One of my favorite books is <title>".
# # For example: “One of my favorite books is Alice in Wonderland”
# # Call the function, make sure to include a book title as an argument when calling the function.
# MY CODE:
# def favorite_book(title):
#     print (f"One of my favorite books is {title}")
# favorite_book('The little prince')


# # 🌟 Exercise 3 : Some Geography
# # Instructions
# # Write a function called describe_city() that accepts the name of a city and its country as parameters.
# # The function should print a simple sentence, such as "<city> is in <country>".
# # For example “Reykjavik is in Iceland”
# # Give the country parameter a default value.
# # Call your function.
# MY CODE:
# def describe_city(city, country = "Israel"):    
#         print(f'{city} is in {country}')
# describe_city('Tel Aviv')

# # Exercise 4 : Random
# # Instructions
# # Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# # Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
# MY CODE:
# def random_number(user_number):
#     secret_number = randint(1,100)
#     print(secret_number)
#     if secret_number == user_number:
#          print("Congrats! you put one of the choosen numbers")
#     else: print("Sorry! It's not the choosen number")

# random_number(35)

# # 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# # Instructions
# # Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# # The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# # Call the function make_shirt().
# MY CODE:
# def make_shirt(size ='L', text = 'I love Python'):
#     print(f'"The size of the shirt is: {size}, and the text is: {text}"')
# make_shirt('L', 'Yes, I code!')
# make_shirt()
# make_shirt('M')
# make_shirt('S', 'Python is awasome!')
# def make_shirt(*sizes:tuple, **texts:string) -> dict:
#     list_of_shirts={}
#     for size in sizes:
#         list_of_shirts[size] = texts
#     return list_of_shirts
# make_shirt('L','S','M', text = "I love Python")

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.
# Bonus: Call the function make_shirt() using keyword arguments.

# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.
from random import randint
import string


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names:list) -> string:
        for magician in magician_names:
            print(magician)
show_magicians(magician_names)

def make_great(magician_names:list):
        great_magicians = ['The great ' + magician for magician in magician_names]
        return great_magicians

magician_names = make_great(magician_names)
print(magician_names)

# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
def get_random_temp():
    return randint(-10, 40)
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
def main():
    temp = get_random_temp()
    print(f'The temperature right now is {temp} degrees Celsius.')
    if temp < 0 :
        print('Brrr, that`s freezing! Wear some extra layers today')
    elif 0 <= temp <= 16:
        print('Quite chilly! Don`t forget your coat')
    elif 16 <= temp <= 23:
        print('Nice weather! Still, Don`t forget your coat')
    elif 24 <= temp <= 32:
        print('Nice weather!Enjoy it!')
    elif 32 <= temp <= 40:
        print('Beach day!')

def get_random_temp(season):
    if season == "winter":
        return randint(-10, 16)
    elif season == "autonm":
        return randint(16, 24)
    elif season == "spring":
        return randint(25, 30)
    else:randint(30, 40)

def main():
    season = input("what is the season?")
    temp = get_random_temp(season)
    print(f'The temperature right now is {temp} degrees Celsius.')
    if temp < 0 :
        print('Brrr, that`s freezing! Wear some extra layers today')
    elif 0 <= temp <= 16:
        print('Quite chilly! Don`t forget your coat')
    elif 16 <= temp <= 23:
        print('Nice weather! Still, Don`t forget your coat')
    elif 24 <= temp <= 32:
        print('Nice weather!Enjoy it!')
    elif 32 <= temp <= 40:
        print('Beach day!')
main()


# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.