class ATMAccount:
    availablr_account = 9991
    def __init__(self, holder) -> None:
        self.holder = holder
        self.account_number = ATMAccount.available_account
        ATMAccount.available_account += 1
#How to access private attributes 
@property
def balance(self):
    return self.__balance

@balance.setter
def __balance(self,amount):
    self.__balance += amount

def deposit(self, amount):
    self.__balance += amount

def withdraw(self, amount):
    if amount > self.balance:
         raise ValueError('insufficient founds')
    self.balance += - amount


account1 = ATMAccount('Yossi Eik')
print(account1.account_number)
account1.balance = 100000
