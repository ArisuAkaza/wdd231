// store the selected elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// adds an event listener to the button that will toggle the list element's list of classes.
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});