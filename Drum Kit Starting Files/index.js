document.querySelector("h1").classList.add("h1-animation");
document.querySelector("div").classList.add("div-animation");

setTimeout(() => {
    document.querySelector("h1").classList.remove("h1-animation");
    document.querySelector("div").classList.remove("div-animation");
}, 2000);

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function handleClick() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
    }
}

document.addEventListener("keydown",function(event)
{//play sound also with keyboard press
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey)
{//animation for the pressed button 
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 300);
}