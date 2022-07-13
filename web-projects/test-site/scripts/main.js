let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/avocado_milk.jpg') {
        myImage.setAttribute('src', 'images/milk.jpg');
    } else {
        myImage.setAttribute('src', 'images/avocado_milk.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Avocado is cutie,' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Avocado is cutie,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
