# TIC TAC TOE GAME
#GLOBAL VARIABLES
board = ['-','-','-',
         '-','-','-',
         '-','-','-',]

game_goes_on = True

winner = None
player1 = 'X'
player2 = 'O'

def display_board():
    print(board[0]+'|'+board[1]+'|'+board[2])
    print(board[3]+'|'+board[4]+'|'+board[5])
    print(board[6]+'|'+board[7]+'|'+board[8])
# starting the game
def play_game():
    while game_goes_on:
        display_board()
        player_input(player1)
        if_game_is_over()
        flip_turn()

    if winner == 'X' or winner == 'O':
        print(f'{winner} won!')
    elif winner == None:
        print("Tie")

def player_input(player):
    move = input('choose a position from 1 to 9:')
    position = int(move) - 1
    board[position] = 'X'
    display_board()
    # if player1 == True:
    #         board[position] = 'X'
    # else: 
    #         board[position] = 'O'
    #         display_board()
   
def if_game_is_over():
    check_winner()
    check_tie()
    
def check_winner():
    if row_winner:
     winner == row_winner
    elif column_winner:
     winner == column_winner
    elif diagonal_winner:
     winner == diagonla_winner
    else:
        winner == None
    
def check_rows():
    # check if there is a row with all the same values and that its not emprty ('-')
    row1 = board[0] == board[1] == board[2] != "-"       
    row2 = board[3] == board[4] == board[5] != "-"      
    row3 = board[6] == board[7] == board[8] != "-"
    if row1 or row2 or row3:
        game_goes_on == False
    if row1:
        return row_winner == board[0]
    elif row2:
        return row_winner == board[2]
    elif row3:
        return row_winner == board[3]    

def check_columns():
    # check if there is a column with all the same values and that its not emprty ('-')
    col1 = board[0] == board[1] == board[2] != "-"       
    col2 = board[3] == board[4] == board[5] != "-"      
    col3 = board[6] == board[7] == board[8] != "-"
    if col1 or col2 or col3:
        game_goes_on == False
    if col1:
        return board[0]
    elif col2:
        return board[2]
    elif col3:
        return board[3]  

def check_diagonals():
    dig1 =  board[0] == board[4] == board[8] != "-"
    dig2 = board[2] == board[4] == board[6] != "-"
    if dig1 or dig2:
        game_goes_on == False
    if dig1:
        return board[0]
    elif dig2:
        return board[2]
   
def check_tie():
    return
play_game()

        
       


