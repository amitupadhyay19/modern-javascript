// Input and form events

// create the variables

const searchForm = document.getElementById('search');
	  searchInput = document.getElementById('search-course');

// events for <form>
searchForm.addEventListener('submit', printEvent);

function printEvent(e) {
	// stop default behaviour of page running on submit OR STOP ACtion
	e.preventDefault();


	// print the value from the input
	console.log(searchInput.value);
	console.log(`Type: ${e.type}`) // type = submit
}