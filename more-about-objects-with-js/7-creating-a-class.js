// class

class Client {
    // access to the constructor
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    membership() {
        let name;
        // check for the balance
        if (this.balance > 1000) {
            name = 'Gold';
        } else if (this.balance > 500) {
            name = 'Platinum';
        } else {
            name = 'Normal';
        }
        return name;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance},
        Membership: ${this.membership() }`
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    // static method doesn't require instanciation
    static welcome () {
        return 'Welcome to the Bank';
    }

}

const mary = new Client('Mary', 1000);
console.log(mary);
console.log(mary.clientInfo() );
console.log(mary.membership() );

mary.withdraw(500);

console.log(mary.clientInfo());

// in this case
console.log(Client.welcome());