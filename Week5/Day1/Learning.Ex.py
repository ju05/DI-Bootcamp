class CharacterTraits:
    def __init__(self, strength:int, intelligence:int, dexterity:int, character_class:str, defence:str):
        self.strength = strength
        self.intelligence = intelligence
        self.dexterity = dexterity
        self.character_class = character_class
        self.defence = defence
class RPG_CHARACTER:
    '''"Class for creating RPG character'''
    characters_created = 0
    characters = {}
    def __init__(self, name:str, traits = (0,0,0,'None',0)) -> object:
        self.name = name
        self.traits = CharacterTraits(*traits)
        RPG_CHARACTER.characters_created += 1
        RPG_CHARACTER.characters[self.name] = self
    def move(self) -> None:
        print(self.name + ' moves')
    def strick(self) -> None:
        print(f'{self.name} is stricking' )
    def defence(self) -> None:
        print(f'{self.name} is defending')
    def print_characters():
        print(RPG_CHARACTER.characters)
conan = RPG_CHARACTER('Conan', traits = (100, 150, 120, 'Warrior', 300))
zina = RPG_CHARACTER('Zina', traits = (100, 150, 120, 'Warrior', 300))
RPG_CHARACTER.strick(zina)
RPG_CHARACTER.defence(conan)
conan.strick()
zina.defence()
print(zina.traits.intelligence)

dir("")
