function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => {
      if (amount <= balance) return balance -= amount;
      else return "Insufficient funds";
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));   
console.log(account.withdraw(30));  
console.log(account.getBalance());  
