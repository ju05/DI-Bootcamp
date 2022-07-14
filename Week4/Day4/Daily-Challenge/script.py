matrix_list = [
    [7, ' ', 3],
    ['T','s','i'],
    ['h','%','x'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['i', 'r', '!']
]
message = []
# i could use zip here
# (*column) = unpack the element
for column in matrix_list: 
    column_0 = [column[0] for column in matrix_list]
    column_1 = [column[1] for column in matrix_list]
    column_2 = [column[2] for column in matrix_list]
print(column_0)  
def check_if_letter(list):
    for index in list:
        is_letter = str(index.isalpha())
        if is_letter == True:
            message.append(index)
        else: pass
def convert(list):
    cracked_message = ""
    for letter in list:
        cracked_message += letter
    return cracked_message

check_if_letter(column_0)
check_if_letter(column_1)
check_if_letter(column_2)
this_is_matrix = convert(message)
final_message = this_is_matrix.replace('s', 's ')
print(final_message)
