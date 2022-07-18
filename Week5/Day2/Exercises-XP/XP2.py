# Exercise 1 : Family
# Instructions
# Create a class called Family and implement the following attributes:
# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
from ast import boolop
from numbers import Number
from unicodedata import name
from xmlrpc.client import boolean


class Family():
    def __init__(self, last_name: str, members:list) -> object:
        self.last_name = last_name
        self.members = members

    def born(self, **child) -> None:
        ''' adds a new member to the class Family'''
        self.members.append(child)
        
        print(f"Congratulations for the new family member {child['name']}!")

    def is_18(self, member_name: str) -> bool:
        '''check if a member is above 18 years old'''
        for member in self.members:
            if member_name == member['name']:
                if member['age'] >= 18:
                    return True
        else:
            return False
    def family_presentation(self):
        '''prints a presentation with the last_name and all the f_names of the members'''
        print(f'Welcome to the {self.last_name} Family!')
        for member in self.members:
            print(f"{member['name']} lives here!")

schmidt = Family('schmidt',[{'name':'Michael','age':35,'gender':'Male','is_child':False},
                        {'name':'Sarah','age':32,'gender':'Female','is_child':False}] )
print(schmidt.members)
schmidt.born(name = 'Moshe', age = 0, gender = 'Male', is_child = True)
print (schmidt.is_18(schmidt.members[0]['name']))
schmidt.family_presentation()

    