let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/red-scale-ruler.png') {
        myImage.setAttribute('src','images/bw-scale-ruler.png');
    } else {
        myImage.setAttribute('src','images/red-scale-ruler.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName)
        myHeading.innerHTML = 'GeoMock is the future, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'GeoMock is the future, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

