

const paragraph = document.querySelector("#p1")
const button = document.querySelector("#button")
const button2 = document.querySelector("#button2")

console.log("my target", document.querySelectorAll(".box"));

console.log("my target " + paragraph);


button.addEventListener("click",()=>{

    gsap.to(".box", { 
        x: 200,
        rotation: 360,
      });
})

button2.addEventListener("click",()=>{

    gsap.to(".box", { 
        x: 0,
        rotation: -360,
      });
})

