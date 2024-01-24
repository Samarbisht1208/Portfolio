const welcomeText = "Hey I'm Samar, Happy to see you here!";
const welcomeElement = document.querySelector("#welcome-text");
var counter = 0;
var text="";

window.addEventListener('load', function() {
    var img = new Image();

    img.src = 'bird-bg.jpg';

    // When the image is loaded
    img.onload = function() {
        var i = setInterval(function(){
            text += welcomeText[counter];
            welcomeElement.innerHTML = text;

            counter++;
            if(counter >= welcomeText.length) {
                document.querySelector("#terminal-blink").style.display = "none";
                clearInterval(i);
            }
        }, 20);
    };
});
