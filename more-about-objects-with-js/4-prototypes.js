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

// second prototype with same name and balance
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership() }`
}
// you can access other properties in the same object or
// you can also access other prototypes function in the same object


// new instance of client
const person = new Client('Amit', '2000');
const person2 = new Client('Rahul', '500'); 

console.log(Client.prototype);

console.log(person);
console.log(person.membership() );
console.log(person.clientInfo() );
// console.log(person2);
// console.log(person2.membership() );