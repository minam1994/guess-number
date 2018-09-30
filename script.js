var input = document.querySelector("#num");
var btn = document.querySelector("#btn");
var p = document.querySelector("#comment");
var img = document.querySelector("img");

function checkNum() {
    if(input.value === "6"){
        p.textContent = "You are right!";
        input.value = "";
        img.src = "images/pexels-photo-327533.jpeg";
    } else if (input.value >0 && input.value <11 && input.value !=="6") {
        p.textContent = "Guess again!";
        input.value = "";
        img.src = "images/pexels-photo-355952.jpeg";
    } else{
        p.textContent = "Use number between 1 and 10!";
        input.value = "";
        img.src = "images/pexels-photo-355952.jpeg";
    }
}

btn.addEventListener("click", checkNum);

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        checkNum();
    }
});

