// function expression to select elements
const selectElement = (s) => document.querySelector(s);

// open menu when on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

// close menu when on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});