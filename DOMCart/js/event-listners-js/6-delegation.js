// Delegation
// with body click

// document.body.addEventListener('click', removeProductFromCart);

// function removeProductFromCart(e) {
// 	// console.log(e.target.classList);
// 	// console.log(e.target.className);

// 	if(e.target.classList.contains('remove')){
// 		// console.log('Yes!!');
// 		// console.log(e.target.parentElement);
// 		// console.log(e.target.parentElement.parentElement);
// 		e.target.parentElement.parentElement.remove();
// 	} else {
// 		console.log('No');
// 	}
// }


// ========== example ============

const shoppingCart = document.querySelector('#shopping-cart');

shoppingCart.addEventListener('click', removeProductFromCart);

function removeProductFromCart(e) {

	if(e.target.classList.contains('remove')) {
		e.target.parentElement.parentElement.remove();
	}
}

// example 2 =========== Add to cart

const courseList = document.querySelector('#courses-list');

courseList.addEventListener('click', addToCart);

function addToCart(e) {
	if(e.target.classList.contains('add-to-cart')) {
		console.log('Course Added!!');
	}
}