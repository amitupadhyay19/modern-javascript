
// getElementByTagName

// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// ========= p2
const courses = document.querySelectorAll('.card h4');

// console.log(courses);
// console.log(courses[0].textContent);

// const coursesArray = Array.from(courses);   
// coursesArray.forEach(function(course){
//     console.log(course.textContent);
// });


// =========== p3  select odd links
const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddLinks.forEach(function(odd){
    odd.style.backgroundColor = 'blue';
    odd.style.color = 'white';
});

// even links

const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');

evenLinks.forEach(function(even){
    even.style.backgroundColor = 'red';
    even.style.color = 'white';
});

// ==== p4 change all the add-to-cart button text
const addCartBtns = document.querySelectorAll('.add-to-cart');

addCartBtns.forEach(function(button){
    button.textContent = 'Something new';
})

// console.log(addCartBtns);




