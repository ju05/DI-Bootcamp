class Farm:
    def __init__(self, name) -> None:
        self.name = (f'{name}`s farm')
def add_animal(new_animal, quantity):
    animals = {}
    new_enter = {new_animal:quantity}
    total_animals = animals.update(new_enter)
    print(f'{quantity} of {new_animal} was added')
def total_animals():
    for animal in animals:
        print(f'{total_animal.key} : {total_animal.value}')
mcdonald = Farm('McDonald')
print(mcdonald.name)
add_animal('cow', 5)
print(animals.values)

