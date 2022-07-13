# # 🌟 Exercise 1 : Set
# # Instructions
# # Create a set called my_fav_numbers with all your favorites numbers.
# # Add two new numbers to the set.
# # Remove the last number.
# # Create a set called friend_fav_numbers with your friend’s favorites numbers.
# # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
# from calendar import prmonth
# from turtle import right


# my_fav_numbers = {3,5,7,8,13,18,21,23,24}
# other_numbers = set()
# other_numbers.add(33)
# other_numbers.add(49)
# my_fav_numbers.update(other_numbers)
# print(my_fav_numbers)
# my_fav_numbers.remove(24)
# print(my_fav_numbers)
# friend_fav_numbers ={7,26,2001,2005}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)


# # 🌟 Exercise 2: Tuple
# # Instructions
# # Given a tuple which value is integers, is it possible to add more integers to the tuple?
# # my_tuple = 1,5,15,21,24
# # my_tuple.add(11)
# # answer: It`s not possible to add something to a tuple.`

# # 🌟 Exercise 3: List
# # Instructions
# # Using this list 
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# # Remove “Banana” from the list.
# basket.remove("Banana")
# # Remove “Blueberries” from the list.
# basket.pop()
# # Add “Kiwi” to the end of the list.
# basket.append("Kiwi")
# # Add “Apples” to the beginning of the list.
# basket.insert(0,"Apples")
# # Count how many apples are in the basket.
# apples = basket.count("Apples")
# print(apples)
# # Empty the basket.
# # basket.clear()
# # Print(basket)
# print(basket)

# # 🌟 Exercise 4: Floats
# # Instructions
# # Recap – What is a float? What is the difference between an integer and a float?
# # integer is a whole number and float is a decimal number
# # Can you think of another way to generate a sequence of floats?
# # Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# sequence = []
# num = 1.5
# sequence.append(num)
# for i in range (2,6):
#     decimal =  i + 0.5
#     sequence.append(i)
#     sequence.append(decimal)
# print(sequence)

# # 🌟 Exercise 5: For Loop
# # Instructions
# # Use a for loop to print all numbers from 1 to 20, inclusive.
# # Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# for i in range(1,21):
#     if (i % 2 == 0):
#         print(i)
# for j in range(1,21):
#     print(j)

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
# while True:
#     user_name = input("Enter your name")
#     if user_name == "Juliana":
#         break

# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
from cmd import PROMPT


user_fruits = input("Enter your favorite fruits separated with a single space")
fruits_list = []
fruits_tolist = user_fruits.split()
fruits_list.append(fruits_tolist)
print(fruits_list)
new_fruit = input("Enter any fruit")
exist_fruit = fruits_list.count(new_fruit) 
# checking if it is more then 0
if exist_fruit > 0:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print(exist_fruit)
    print("You chose a new fruit. I hope you enjoy")
# # Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# # Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# # Now that we have a list of fruits, ask the user to input a name of any fruit.
# # If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# # If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
toppings = ""
while True:
    toppings = input("Enter a pizza topping: ")
    PROMPT(f"{toppings} were added to your pizza")
    if toppings == "quit":
        break
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
ages = int(input(f"What is {name}'s age?"))
