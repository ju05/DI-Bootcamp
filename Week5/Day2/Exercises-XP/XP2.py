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

    def get_member(self):
        '''checking if the member exists in self.members'''
        for member in self.members:
            if name == member['name']:
                return member
        else:
            raise ValueError("No such member in this family")

    def is_18(self, member_name: str) -> bool:
        '''check if a member is above 18 years old'''
        member = self.get_member()
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

class TheIncredibles(Family):
    def use_power(self, name:str)-> None:
            member = self.get_member(name)
            if self.is_18(name):
                print(f'{member[name]} is using power: {member[power]}')
            else: 
                raise ValueError("Member is under 18!")

    def family_presentation(self):
        '''adds new elelments in the family_presentation method'''
        super().family_presentation()
        power_stack = '|'.join([member['power'] for member in self.members])
        print(f'power stack:{power_stack}')
       
data2 = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredible_fam = TheIncredibles('Incredible', data2)
incredible_fam.use_power('Sarah')