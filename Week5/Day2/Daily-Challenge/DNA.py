import random

ZERO_ONE = [0,1]
class Gene:
    def __init__(self):
        self.val = random.choice(ZERO_ONE)
    def flip(self):
        # if is 1 - 1 = 0 if is 1 - 0 = 1
        self.val = 1 - self.val
    def mutate(self):
        self.__flip()
    def __str__(self) -> str:
        pass

class Chromosome:
    def __init__(self):
        self.genes = [Gene() for i in range(10)]
    def mutate(self):
        for gene in self.genes:
            threshold = random.randint(0,101)
            if threshold >= 50:         
                gene.mutate()
    def __str__(self) -> str:
        output = '|'.join(list(map(str,self.genes)))
        for gene in self.genes:
            output += str(gene) + '\n'

chromo = Chromosome()
print(chromo)
class DNA: