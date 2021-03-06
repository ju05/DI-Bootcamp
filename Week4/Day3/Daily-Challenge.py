# Instructions
# Challenge 1
# Ask a user for a word

# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
word = input("enter a word")
dictionary = {}
for i, letter in enumerate(word):
    if letter in dictionary:
        dictionary[letter].append(i)
        continue
    else: 
        dictionary[letter] = [i]

print(dictionary)
       
# for i in range (len(dictionary)):
#     list_of_letters.append(i)

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


# # Challenge 2
# # Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# # Sort the list in alphabetical order.
# # Return “Nothing” if you can’t afford anything from the store.
# # Examples
# # The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1000",
#   "Fertilizer": "$20"
# }
# wallet = '$300'
# can_buy = []
# wallet_clean = int(wallet.strip('$'))
#     if ',' in wallet_clean:
#         wallet_clean = wallet_clean.split(',')
#         wallet_clean= "".join(wallet_clean)
  
# price_clean = int(price.strip('$'))
#     if "," in price_clean:
#         price_clean=price_clean.split(',')
#         wallet_clean= "".join(price_clean)

#     for item, price in items_purchase.items():
#     if int(price_clean) > int(price_clean):
#         continue
#     can_buy.append(item)
    
# print(can_buy)    
