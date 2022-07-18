# TIC TAC TOE GAME
#GLOBAL VARIABLES
board = ['-','-','-',
         '-','-','-',
         '-','-','-',]

game_goes_on = True
winner = None
current_player = 'X'

def display_board():
    print(board[0]+'|'+board[1]+'|'+board[2])
    print(board[3]+'|'+board[4]+'|'+board[5])
    print(board[6]+'|'+board[7]+'|'+board[8])
# starting the game
def play_game():
    while game_goes_on:
        display_board()
        player_input(current_player)
        check_winner()
        if_game_is_over()
        flip_turn()
    if winner == 'X' or winner == 'O':
        print(f'{winner} won!')
    elif winner == None:
        print("Tie")

def player_input(current_player):
    move = input('choose a position from 1 to 9:')
    position = int(move) - 1
    board[position] = current_player
    # display_board()
def check_tie():
    global game_goes_on
    if '-' not in board:
        game_goes_on = False
    # hey, gaston: I am having trouble to figure out how to call the winner if there is a match on the row, columsn or diagonals.
    # i dont get errors, but the game continues even when someone won.
def check_winner():
    # set global variable
    global winner
    row_winner = check_rows()
    column_winner = check_columns()
    diagonals_winner = check_diagonals()
    if row_winner:
        winner = row_winner
    elif column_winner:
        winner = column_winner
    elif diagonals_winner:
        winner = diagonals_winner
    
def if_game_is_over():
    check_winner()
    check_tie()
       
def if_game_is_over():
    check_winner()
    check_tie()

    
def check_rows():
#   set global variables
    global game_goes_on
    # check if there is a row with all the same values and that its not emprty ('-')
    row1 = board[0] == board[1] == board[2] != "-"       
    row2 = board[3] == board[4] == board[5] != "-"      
    row3 = board[6] == board[7] == board[8] != "-"
    # if any row have a match we have a winner
    if row1 or row2 or row3:
        # stop game:
        game_goes_on == False
        # return the winner:
    if row1:
        return board[0]
    elif row2:
        return board[3]
    elif row3:
        return board[6]    

def check_columns():
    # set global variable
    global game_goes_on
    # check if there is a column with all the same values and that its not emprty ('-')
    col1 = board[0] == board[3] == board[6] != "-"       
    col2 = board[1] == board[4] == board[7] != "-"      
    col3 = board[2] == board[5] == board[8] != "-"
    if col1 or col2 or col3:
        game_goes_on == False
    if col1:
        return board[0]
    elif col2:
        return board[2]
    elif col3:
        return board[3]  

def check_diagonals():
     # set global variable
    global game_goes_on
    dig1 =  board[0] == board[4] == board[8] != "-"
    dig2 = board[2] == board[4] == board[6] != "-"
    if dig1 or dig2:
        game_goes_on == False
    if dig1:
        return board[0]
    elif dig2:
        return board[2]
      
def flip_turn():
    global current_player
    if current_player == 'X':
        current_player = 'O'
    elif current_player == 'O':
        current_player = 'X'

play_game()
        
       


