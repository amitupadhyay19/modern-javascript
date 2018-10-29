// object constructors

function Client(name, balance) {
    this.name = name;
    this.balance = balance;   
}

// Attach the prototype to the method (membership = method name)
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


// Business // functions with more parameters
function Business(name, balance, phone, category) {
    Client.call(this, name, balance); // calling name and balance from client constructors
    this.phone = phone;
    this.category = category;
}

// inherit the prototypes // adding new prototypes into business = clientinfo
Business.prototype = Object.create(Client.prototype);

// return the constructor as business // changing from client to business
Business.prototype.constructor = Business;

// Business.prototype.clientInfo = function() { // you can overwrite previous method 
Business.prototype.businessInfo = function() { // or you can create a new one
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership() }, Category: ${this.category}, Phone: ${this.phone}`
}

// create a business
const business = new Business('Udemy', 100000, 9999998888, 'Education');

console.log(business);
// console.log(business.clientInfo());
console.log(business.businessInfo());