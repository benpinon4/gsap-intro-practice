const body = document.querySelector("body");
const div1 = document.createElement("div");
const box1 = document.createElement("div");
const header1 = document.createElement("h1");

header1.textContent = "Key Stroke Animation"
div1.className = "div1";
box1.className = "box1"

console.log("test")
body.appendChild(header1);

body.appendChild(div1);

div1.appendChild(box1)
let x = 300;
let y = 300;
let speed = 10;

document.addEventListener("keydown", function (event) {



    
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        if (x >= 0){
            x += speed
            box1.style.top = x + "px"
            console.log(x)
        }
        event.preventDefault();
        break;
      case "ArrowUp":
        if (x >= 10){
            x -= speed
            box1.style.top = x + "px"
            console.log(x)
        }
        event.preventDefault();
        break;
      case "ArrowLeft":
        if (y >= 0){
            y -= speed
            box1.style.left = y + "px"
            console.log(y)
        }
        event.preventDefault();
        // code for "left arrow" key press.
        break;
      case "ArrowRight":
        if (y >= 0){
            y += speed
            box1.style.left = y + "px"
            console.log(y)
        }
        event.preventDefault();
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
});
