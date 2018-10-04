// Event Listners
// document.getElementById('clear-cart').addEventListener('click', function(){
// 	console.log('You clicked the button');
// });

// second way
// const clearCartBtn = document.getElementById('clear-cart');

// clearCartBtn.addEventListener('click', function(){
// 	console.log('You clicked the button');
// });

// another way // this one is more cleaner 

const clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearBtnFunction);

function clearBtnFunction() {
	console.log('You clicked the button');
}