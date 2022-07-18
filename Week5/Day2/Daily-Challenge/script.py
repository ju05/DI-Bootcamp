
from unicodedata import numeric


class Pagination():
    def __init__(self, items:list, pageSize =10) -> None:
        self.items = items 
        self.pageSize = pageSize
    def getVisibleItems(self, items:list, pageSize) ->list:
        '''returns a list of items visible depending on the pageSize'''
        for item in items:
            print(items.split(","))
        

alphabetList = "abcdefghijklmnopqrstuvwxyz".split(',')
p = Pagination(alphabetList, 4)
p.getVisibleItems(alphabetList,4)