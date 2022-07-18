# # Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call
# def calculation(num1,num2):
#     adition = num1 + num2
#     substraction =  num1 - num2
#     return adition, substraction
# print(calculation(2,5))

# # args = arguments
# #  if you don`t know how much arguments will be acepeted, write "*` in the arguments space
# # kwargs = key value arguments -> ** in the argument
# def some_func(a,b):
#     print(a,b)
# some_func(5, b=5)

# def create_dict(**details) -> dict:
#     return details
# details_yossi = create_dict_func(name = "Yossi", address = "Tel Aviv", country = "Israel")

# print(details_yossi)


# # scopes: can be Global (outside the function), can be accessed from anywhere on the code
# #  or local (inside the function)

# # good practices when writing functions
# def alowed(accounts:list, allowed:list) -> list
# '''method for checking if a account is allowed'''
#     alowed_list = []
#     for account in accounts:
#         allowed_lis.append(account)
#         return alowed_list

# zip, map, reduce, filter, are very useful fast builded in functions that returns object of its kind, so needed to be convert th a list or dict etc...

# Using map and filter, try to say hello to everyone who's name is less than or equal to 4 letters
import string
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
eligeble_people = []
def check_name(people:list)->string:
     for person in people:
        if (len(person) <= 4):
            eligeble_people.append(person)
            return eligeble_people
print(check_name(people))
# welcome_list = list(filter(check_name,names))
# say_hello = lambda name: print("fHello, {name}")
# print(welcome_list)

