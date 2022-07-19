# Exercise 1 : Built-In Functions
# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.
# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
from locale import currency
# def abs(arg:int)->int:
#     '''abs() is a built-in function that will return you the absolute value for the input given.'''
#     print(abs.__doc__)
# def int(arg:str)->int:
#     '''int() is a built-in function that converts any string, bytes-like object or a number to integer and returns.'''
#     print(int.__doc__)
# def input(arg:any)->any:
#     '''input() is a built-in function,Allows user input'''
#     print(int.__doc__)
# # Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.
# a = abs(13456)
# print(a)
# b = int('4')
# print(b)
# c = input('anything')
# print(c)

# 🌟 Exercise 2: Currencies
# Instructions
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    def __str__(self)->str:
        return f'{self.amount} {self.currency}'
    def __int__(self) -> int:
        return int(self.amount)
    def __repr__(self)->str:
        return f'{self.amount} {self.currency}'
    def __add__(self, other):
        if type(other) == int:
            return int(self) + (other)
        elif self.currency == other.currency:
            return self.amount + int(other)
        else:
             print("cant sum different currencies")
    def __call__(self):
        return f'{self.amount} {self.currency}'
    def __iadd__(self, other) -> int:
        self.amount += int(other)
        return self 

# Your code starts HERE
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1+5)
print(c1+c2)
c1 += 5
c1 += c2
c1()
c1 += 5
c1()
c1 += c2
c1()
c1+c3
