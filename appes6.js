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


// Business class // with this method you can access properties and all the methods

class Business extends Client {
    constructor(name, balance, phone, category) {
        // access the parent constructor properties
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance},
        Membership: ${this.membership() }, Phone: ${this.phone}, Category: ${this.category}`;
    }

    static welcome () {
        return 'Welcome to Banking for business';
    }
}

// instanciate the subclass
const business = new Business('Business Name', 10000, 98999098990, 'Real State');

console.log(business);
console.log(business.clientInfo() );
console.log(Business.welcome() );
console.log(business.getBalance() );
console.log(Client.welcome() );