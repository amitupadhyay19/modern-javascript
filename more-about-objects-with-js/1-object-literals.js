// Object Literals
// if you want to hard code than use literals

const client = {
    name: 'Amit',
    balance: 1000,
    membership: function() {
        let name;
        // check the balance
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
console.log(client);
console.log(client.name); // access object property with dot
console.log(client.balance)
console.log(client.membership() );