// Event Bubbling
// variables

const card = document.querySelector('.card'),
	  infoCards = document.querySelector('.info-card'),
	  addCartBtn = document.querySelector('.add-to-cart');


// Event Listners

card.addEventListener('click', function(e) {
	console.log('You clicked the card');
	// it will stop the parent click action
	e.stopPropagation(); 
});

infoCards.addEventListener('click', function(e) {
	console.log('You clicked the info');
	e.stopPropagation();
});

addCartBtn.addEventListener('click', function(e) {
	console.log('You clicked the button');
	e.stopPropagation();
});