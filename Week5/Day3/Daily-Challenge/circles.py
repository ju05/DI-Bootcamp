import turtle
class Circle():
    '''A class initialized with radius or diameter of a circle'''
    def __init__(self, radius = 0, diameter = 0,) -> None:
        self.radius = radius
        self.diameter = radius*2
    @classmethod
    def from_diameter(cls,diameter):
        new_circle = Circle(diameter/2)
        return new_circle

    def circle_area(self) -> float:
        '''calculates the area of the circle'''
        return  3.14 * self.radius**2

    def print_circle(self): #what is the output?
        '''prints the circle with given area using module turtle'''
        output = turtle.circle(self.circle_area())
        return output

    def __add__(self, other:object)->object:
        '''adds two circles together'''
        return Circle(self.radius +other.radius)

    def __le__(self, other)->str:
        '''compare two circles radius'''
        return self.circle_area() <= other.circle_area()
    
    def __l__(self, other):
        return self.circle_area()

    def __eq__(self, other):
        return self.circle_area() == other.circle_area()

    def __repr__(self):
        return str
#     def sort_circles(self,circle1, circle2)->list:
#         '''sort 3 circles in a list'''
#         to_sort =[]
#         to_sort.append(self, circle1, circle2)
#         sorted_circles = to_sort.sort()
#         return sorted_circles

circleA = Circle(2)
circleB = Circle(4)
print(f'circleA 1: r:{circleA.radius} d= {circleA.diameter}')
print(f'circleB 1: r:{circleB.radius} d= {circleA.diameter}')

# circleC = Circle(3,6)
# print_circle(circleA)
# print(circleA.circle_area())
# compare_circles(circleA, circleB)
# circleA + circleB
# print(sort_circles(circleA,circleB,circleC))