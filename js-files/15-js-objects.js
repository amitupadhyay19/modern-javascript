// js objects // {} this indicates object

const person = {
    firstName: 'Amit',
    lastName: 'Upadhyay',
    job: 'Web developer',
    email: 'email.@mail.com',
    age: 31,
    favotitMusic: ['Trance', 'Rock', 'Gringe'],
    living: {
        city: 'Delhi',
        country: 'India'
    },
    getAge: function(){
        // return 31;
        // return new Date();
        return new Date().getFullYear();
    },
    bornYear: function(){
        // return new Date().getFullYear() - 31;
        return new Date().getFullYear() - this.age; // we can access all the above properties
    },
    getJob: function(){
        return this.job;
    }
}

// console.log(person);
// console.log(person.firstName);
// // console.log(person.email); // popular most used
// // console.log(person['email']); // second method
// console.log(person.age);
// console.log(person.favotitMusic);
// console.log(person.living);
// // console.log(person.getAge() );
// console.log(person.bornYear() );

// console.log(person.getJob() );

// Array of objects

let cars = [
    {model: 'Mustang', engine: 6.0},
    {model: 'Camaro', engine: 6.1},
    {model: 'Challenger', engine: 6.1}
]

console.log(cars);

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].model); // this will print 0 first than it will increment 
}

