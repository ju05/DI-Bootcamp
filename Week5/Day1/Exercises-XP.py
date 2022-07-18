# 🌟 Exercise 1: Cats
# Instructions
# Using this class

class Cat:
    def __init__(self, cat_name, cat_age) -> object:
        self.name = cat_name
        self.age = cat_age
    def oldest_cat(Cat1, Cat2, Cat3) -> str:
        if (Cat1.age > Cat2.age and Cat1.age > Cat3.age):
            print(f'{Cat1.name} is the oldest, and is {Cat1.age} years old.')
        elif (Cat2.age > Cat3.age and Cat2.age > Cat1.age):
            print(f'{Cat2.name} is the oldest, and is {Cat2.age} years old.')
        else:
            print(f'{Cat3.name} is the oldest, and is {Cat3.age} years old.')

# Instantiate three Cat objects using the code provided above.
Caramelo = Cat('Caramelo', 7)
Pipoca = Cat('Pipoca', 10)
Mingal = Cat('Mingal', 4)
# Outside of the class, create a function that finds the oldest cat and returns the cat.
Cat.oldest_cat(Caramelo, Pipoca, Mingal)
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
class DOG:
    def __init__(self, name, height) -> object:
        self.name = name
        self.height = height
    def bark(name):
        print(f'{name} goes woof!')
    def jump(name, height):
        height = height * 2
        print(f'{name} jumps {height}cm high!')
def bigger_dog(DOG1, DOG2) -> str:
    if (DOG1.height > DOG2.height):
        print(f'The biggest dog is {DOG1.name}')

davids_dog = DOG('Rex', 50)
print(davids_dog.name, davids_dog.height)
DOG.bark('Rex')
DOG.jump('Rex', 50)
sarahs_dog = DOG('Teacup', 20)
print(sarahs_dog.name, sarahs_dog.height)
DOG.bark('Teacup')
DOG.jump('Teacup', 20)
bigger_dog(davids_dog, sarahs_dog)
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
class Song:
    def __init__(self, lyrics: list) -> list:
        self.lyrics = []
def sing_me_a_song(lyrics):
    for line in lyrics:
        print(line)

sing_me_a_song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

# stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# Then, call the sing_me_a_song method. The output should be:
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven


# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
class Zoo:
    def __init__(self, zoo_name) -> None:
        self.name = zoo_name
class Zoo:
    animals = []     

def add_animals(new_animal):
    animals = [] 
    if (new_animal in animals):
        print('this animal already exists in the zoo')
    else: 
        animals.append(new_animal)
        print(f'{new_animal} was added in animals list')
        
# def sell_animal(animal_sold):
#     if animal_sold is not animals:
#         print('We don`t have this animal')
#     else:
#         self.animals.remove(animal_sold)
# def sort_animals():
#     sorted_animals = animals.sort()
#     print(sorted_animals)

add_animals(['apple'])

# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)
dir("")