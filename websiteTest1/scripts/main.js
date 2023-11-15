const myImage= document.querySelector("img");

myImage.onclick= () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/capybara-1.jpg"){
        myImage.setAttribute("src","images/capybara-2.jpg");
    }
    else
        myImage.setAttribute("src","images/capybara-1.jpg");
}

let myButton = document.querySelector("button");
let myHeading = document. querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");

    if(!myName) {
        setUserName();
    }
    else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the Cult, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const myName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to the Cult, ${myName}`;
}




myButton.onclick = () => {
    setUserName();
  };