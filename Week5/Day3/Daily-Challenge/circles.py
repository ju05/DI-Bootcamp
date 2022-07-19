import turtle
class Circle():
    '''A class initialized with radius or diameter of a circle'''
    def __init__(self, radius = 0, diameter = 0,) -> None:
        self.radius = radius
        self.diameter = diameter

    def circle_area(self) -> float:
        '''calculates the area of the circle'''
        area = 3.14 * self.radius**2
        return area

    def print_circle(self): #what is the output?
        '''prints the circle with given area using module turtle'''
        printed_circle = turtle.circle(self.circle_area(self))
        print(printed_circle)

    def __add__(self, other):
        '''adds two circles together'''
        diameter = self.radius*2
        int(self.diameter) + int(other.diameter)

    def compare_circles(self, other)->str:
        '''compare two circles radius'''
        if self.radius > other.radius:
            print("first circle is bigger")
        else:
            print("second circle is bigger")
    def sort_circles(self,circle1, circle2)->list:
        '''sort 3 circles in a list'''
        to_sort =[]
        to_sort.append(self, circle1, circle2)
        sorted_circles = to_sort.sort()
        return sorted_circles

circleA = Circle(10,10)
circleB = Circle(5,10)
circleC = Circle(3,6)
print_circle(circleA)
print(circleA.circle_area())
compare_circles(circleA, circleB)
circleA + circleB
print(sort_circles(circleA,circleB,circleC))