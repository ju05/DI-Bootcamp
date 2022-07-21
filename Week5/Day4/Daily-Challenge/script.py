from typing import Counter
import pprint

#PART I
#in unique_words() #i need to take out the dot because it is returning the same word if it is the final word and also check why is "geeks" in the list
#I didnt understand how to do the @classmethod, i tryed but isnt working
class Text():
    def __init__(self, text_str:str) -> None:
        self.text_str = text_str
    @classmethod
    def check_text(cls,text_file):
        with open (text_file, mode='r') as file:
            text_file = file.read()
            return Text(text_file)

    def frequency_of_word(self, word) -> int:
        '''returns the frequency of a given word in the self.text_str'''               
        if len(self.text_str) != 0:
            split = self.text_str.split(' ')
            frequency = split.count(word)
            return f' the frequency of `{word}` is {frequency}'
        else: None

    def most_common_word(self)->int:
        '''returns the most common word in the self.text_str''' 
        if len(self.text_str) != 0:
            split = Counter(self.text_str.split(' '))
            most_common = split.most_common(1)
            return f'the most common word is `{most_common}`'
        else:None

    def unique_words(self)->list: 
        '''returns a list of words that appears just once in the self.text_str'''
        if len(self.text_str) != 0: #strip()
            # split = Counter(self.text_str.split(' '))
            unique_words = set(self.text_str.split(' '))
            # unique = [w for w in unique_words if Counter[w] == 1]
            return f'The unique words are: {unique_words}'

text1 = Text('A good book would sometimes cost as much as a good house.')
print(text1.frequency_of_word('good'))
text2 = Text('geeks for geeks is for geeks. By geeks and for the geeks.')
print(text2.most_common_word())
print(text2.unique_words())

#Part II
uploaded_text = Text.check_text('./the_stranger.txt')
print(Text.check_text('./the_stranger.txt').most_common_word())
print(Text.check_text('./the_stranger.txt').frequency_of_word('good'))
                
