const texts = ["Cyber Security Enthusiast", "Developer", "Gamer"];
let i = 0;
let j = 0;
const speed = 100;
const deleteSpeed = 50;
const pauseTime = 1000; 
function typeWriter() {
  if (i < texts[j].length) {
    document.getElementById("typewriter").innerHTML += texts[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(deleteText, pauseTime); 
  }
}

function deleteText() {
  if (i > 0) {
    document.getElementById("typewriter").innerHTML = texts[j].substring(0, i - 1);
    i--;
    setTimeout(deleteText, deleteSpeed);
  } else {
    j = (j + 1) % texts.length;
    setTimeout(typeWriter, pauseTime);
  }
}

window.onload = typeWriter;
