list1 = [5, 10, 15, 20, 25, 50, 20]
tweenty = list1.index(20)
new_list = list1.insert(tweenty,200)
print(tweenty)
print(list1)

# Unpack the following tuple into 4 variables
a,b,c,d = (10, 20, 30, 40)
a = print(a)
b = print(b)
c = print(c)
d = print(d)
# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value
# FOR LOOPS
# Accept a number from the user and print its multiplication table
user_num = int(input("enter a number"))
for num in range (1,11):
    print (num * user_num)
# a little bit more complicated:
for num_a in range(1,6):
    out_str = ''
    for num_b in range (1,11):
        out_str+=f"{num_a * num_b}|"
    print(out_str)