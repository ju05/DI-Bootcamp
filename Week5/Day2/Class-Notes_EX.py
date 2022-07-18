# # Try to recreate the class explained below:
# # We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
# # We can create a class called BlockedDoor that inherits from the base class Door.
# # We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

# from msilib.schema import Error
# from xmlrpc.client import boolean

# class Door:
#     def __init__(self) -> object:
#         self.is_opened = True
#     def open_door(self):
#         self.is_opened = True
#         print('the door is open')
#     def close_door(self):
#         self.is_opened = False
#         print('the door is closed')
# class BlockedDoor(Door):
#     def __init__(self) -> object:
#         self.is_opened = False
#     def open_door(self):
#         raise Exception('Cannot open Blocked Door!')
#     def close_door(self):
#         raise Exception('Cannot open Blocked Door!')

# door = Door()
# print(door.is_opened)
# blockedDoor = BlockedDoor()
# blockedDoor.open_door()
# blockedDoor.close_door()

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
sum = 0 
for number in my_list:
    try:
        sum =+ number 
    except:
        continue
else:
    number_count += 1
    print('Number Count', number_count)
finally:
    pass
else:
    print(sum)