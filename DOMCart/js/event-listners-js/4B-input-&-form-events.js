// Input and form events

// create the variables

const searchForm = document.getElementById('search');
	  searchInput = document.getElementById('search-course');

// events for <form>
// searchForm.addEventListener('submit', printEvent);

// input Events
// searchInput.addEventListener('keydown', printEvent);
// searchInput.addEventListener('keyup', printEvent);
// searchInput.addEventListener('keypress', printEvent);
// searchInput.addEventListener('focus', printEvent);
// searchInput.addEventListener('blur', printEvent);
// searchInput.addEventListener('cut', printEvent);
// searchInput.addEventListener('copy', printEvent);
// searchInput.addEventListener('paste', printEvent);
searchInput.addEventListener('input', printEvent); // this works all



function printEvent(e) {
	// stop default behaviour of page running on submit OR STOP ACtion
	// e.preventDefault();

	// if(searchInput.value.length == 0){ // case blur
	// 	alert('Type Something! please');
	// }

	// print the value from the input
	console.log(searchInput.value);
	console.log(`Type: ${e.type}`) // type = submit
}