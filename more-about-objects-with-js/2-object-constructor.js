// object constructors
// this is more powerfull and dynamic used
// if you want to use more objects than use object constructors
// (name, balance) => this part is a constructor

function Client(name, balance) {
    this.name = name;
    this.balance = balance;   
    this.membership = function() {
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
}

// new instance of client
const person = new Client('Amit', '2000');
const person2 = new Client('Rahul', '500'); // using more objects with different values


console.log(person);
console.log(person.membership() );
console.log(person2);