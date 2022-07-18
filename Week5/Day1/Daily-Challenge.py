# Global variable
animals = {}
class Farm:
    def __init__(self, name) -> object:
        self.name = name        
    def add_animal(self, new_animal, quantity = 1):
        if new_animal in animals:
            animals[new_animal] += quantity
            print(f'{quantity} of {new_animal} was added')
        else:
            animals[new_animal] = quantity
            print(f'{quantity} {new_animal} was added')
    def get_info(self) -> str:
        output = f'{self.name}`s Farm \n\n'
        for animal,quantity in animals.items():
            output += f'{animal} : {quantity} \n'
        output += f'\n\n E-I-E-I-O!'
        return output
    def get_animal_types(self) -> list:
        animals2 = dictionary.keys
        sorted_list = sorted(animals2)  
    def get_short_info(self):   
        get_animal_types(macdonald) 
        print('McDonald’s farm has {sorted_list}.')
        

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5) 
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
macdonald.get_animal_types(animals)


# Expand The Farm
# Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheep.”. The method should call the get_animal_types function to get a list of the animals.
