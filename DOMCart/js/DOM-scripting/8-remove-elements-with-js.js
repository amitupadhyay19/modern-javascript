// Remove elements

// const links = document.querySelectorAll('.link');
// links[0].remove();

// console.log(links);

const cards = document.querySelectorAll('.card');
cards[11].remove();

console.log(cards);

// remove by the children

const navigation = document.querySelector('#primary');
// const links = document.querySelector('#primary .link'); // selecct only one
const links = document.querySelectorAll('#primary .link');

navigation.removeChild(links[4]);

console.log(links);
console.log(navigation);

