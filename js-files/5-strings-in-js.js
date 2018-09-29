// strings in js

let name;

// quotes
name = 'Amit Upadhyay';
name = "Amit Upadhyay";

// let message = "Then i said: hey!! that's nice"; 
let message = 'Then i said: hey!! that\'s nice'; //or

console.log(message);

//concatenation sign is +

let learning = 'Javascript',
    modern = 'Modern'

// to add space after modern we use + and ' '
console.log('Learning: '+ modern + ' ' + learning); 

// or you can also create variables like that

let learning1 = 'Modern' + ' ' + 'Javascript';

console.log(learning1);

// concatenate 2 variables

let learning2 = 'learning',
    tech = 'Javascript';

    console.log(learning2 +' '+ tech);

// concatenate variables with strings

let band = 'Metallica',
    song  = 'Enter Sandman';

let playing;
playing = 'Playing: ' + song +  ' by ' + band;

console.log(playing);

// other way to contenate

let learn;

learn = 'Modern ';
learn += 'Javascript'; //when we gonaa concatenate from the previous line we add += 
learn += ' at udemy';
console.log(learn);