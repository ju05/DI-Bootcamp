# Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
from audioop import reverse


keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
zipped = zip(keys, values)
dictionary = dict(zipped)
for item in zip(keys, values):
    print(item)

print(dictionary)


# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


#  Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
list_prices = []
# How much does each family member have to pay ?
for age in family.values():
    if  3<= age <= 12:
        price += 10
        list_prices.append(10)
    elif age > 12 :
        price += 15
        list_prices.append(15)
print(list_prices)
print(price)
# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


#  Exercise 3: Zara
# Instructions
# Here is some information about a brand.
brand = {'name': 'Zara', 
        'creation_date': 1975,
        'creator_name': 'Amancio Ortega Gaona',
        'type_of_clothes': ['men', 'women', 'children', 'home'], 
        'international_competitors': ['Gap', 'H&M', 'Benetton'], 
        'number_stores': 7000, 
        'major_color':{ 
                    'France': 'blue', 
                    'Spain': 'red', 
                    'US': 'pink green'}
}
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# 3. Change the number of stores to 2.
brand.update({'number_stores': 2})
print(brand)
# 4. Print a sentence that explains who Zaras clients are.

types_of_clothes = brand['type_of_clothes']
phrase = ""
for type in types_of_clothes:
    phrase += type + "," 
print(f'The clients of Zara are {phrase}')
brand.update({'country_creation': 'Spain'})
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
print('international_competitors' is brand.keys)
# 7. Delete the information about the date of creation.
brand.pop('creation_date')
print(brand)
# 8. Print the last international competitor.
print(brand['international_competitors'][2])
# 9. Print the major clothes colors in the US.
print(brand['major_color']['US'])
# 10. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))
# 11. Print the keys of the dictionary.
print(brand.keys())
# 12. Create another dictionary called more_on_zara with the following details:
more_zara = {'creation_date': 1975,
            'number_stores': 10000
}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_zara)
# 14. Print the value of the key number_stores. What just happened ?
print(brand['number_stores'])
#The number 2 was updated to 10000

# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# Analyse these results :
# #1/
# disney_users_A = {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#2/
# disney_users_B = {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# #3/
# disney_users_C = {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
indexes = []
for i in range (len(users)):
    indexes.append(i)
disney_users_A = zip(users, indexes)
disney_users_B = zip(indexes, users)
disney_users_C1 = zip(sorted(users),indexes)
print(dict(disney_users_A))
print(dict(disney_users_B))
print(dict(disney_users_C1))
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.
