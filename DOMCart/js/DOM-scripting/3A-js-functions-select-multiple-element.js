// getElementByClassName

// const links = document.getElementsByClassName('link');

// links[0].style.color = 'red';
// links[0].textContent = 'A new text';
// links[0].style.background = '#000';

// console.log(links);
// console.log(links[0]);

// ================== part 2

// const links = document.querySelector('#primary').getElementsByClassName('link');
// one more method
// const links = document.getElementById('primary').getElementsByClassName('link');

// console.log(links);

// ======= p3 getElementByTagName

const images = document.getElementsByTagName('img');
// console.log(images);
// console.log(images[0]);
// console.log(images[0].src);
// console.log(document.images);

// convert HTNL Collection into an array
imagesArray = Array.from(images);
// console.log(imagesArray);

imagesArray.forEach(function(image) {
    console.log(image);
});