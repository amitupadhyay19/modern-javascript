// object constructors

function Client(name, balance) {
    this.name = name;
    this.balance = balance;   
}

// with constructor => you can separate the functions with object constructor, code more organized
// membership function attached to client constructor


// Attach the prototype to the method (membership = method name)
//same name as client 
Client.prototype.membership = function() {
    let name;
    // check for the balance
    if(this.balance > 1000) {
        name = 'Gold';
    } else if(this.balance > 500) {
        name = 'Platinum';
    } else {
        name = 'Normal';
    } 
    return name;
} 
// you can access other properties in the same object or
// you can also access other prototypes function in the same object
// second prototype with same name and balance
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership() }`
}

// Another method to withdraw money from account
Client.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

// create deposit method
Client.prototype.deposit = function(amount) {
    this.balance += amount;
}

// check the balance
Client.prototype.getBalance = function() {
    return this.balance;
}



// new instance of client
const person = new Client('Amit', '2000');
const person2 = new Client('Rahul', '600'); 

console.log(Client.prototype);

console.log(person);
console.log(person.membership() );
console.log(person.clientInfo() );
person.withdraw(1000);
console.log(person.clientInfo() );
console.log(person.getBalance() );
person.deposit(500);
console.log(person.clientInfo() );
console.log(person.getBalance() );

console.log('--------')

console.log(person2);
console.log(person2.membership() );
console.log(person2.clientInfo() );
person2.withdraw(100);
console.log(person2.clientInfo() );
console.log(person2.getBalance() );
person2.deposit(500);
console.log(person2.clientInfo() );
console.log(person2.getBalance() );