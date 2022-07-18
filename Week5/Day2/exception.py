from multiprocessing.sharedctypes import Value


while True:
try:
    user_in = int(input('Number:'))
    print(user_in, 'number!')
    break
except:
    continue
except ValueError:
    print(f'invalid Type')
    

VALID_CHOICES = ['Quit', 'Start']
while True:
    try:
        user_in = input('choice:')
        if user_in not in VALID_CHOIVES:
            raise ValueError('invalid type')
            breakexcept ValueError:
            continue
    