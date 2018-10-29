// object create

const Client = {
    getBalance : function() {
        return `Hello ${this.name} your balance is ${this.balance}`;
    },
    withdraw : function(amount) {
        return this.balance -= amount;
    },
    Deposit: function(amount) {
        return this.balance += amount;
    }
}

// create a new object and give a balance

const mary = Object.create(Client);
// attach the properties
mary.name = 'Mary';
mary.balance = 1000;

console.log(mary);
console.log(mary.getBalance() );

// function withdraw some money
mary.withdraw(500);
console.log(mary.getBalance() );

// deposit some money
mary.Deposit(1200);
console.log(mary.getBalance());

// another method // but this method is not very popular
const juan = Object.create(Client, {
    name : {value: 'Juan'},
    balance: {value: 1000}
})

console.log(juan);