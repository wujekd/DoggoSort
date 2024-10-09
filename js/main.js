import { splash1 } from "./splash1.js";
import { lists } from "./lists.js";
import { buttons } from "./buttons.js";
import { pubsub } from "./pubsub.js";



document.addEventListener("DOMContentLoaded", ()=> {


    const mainImg = document.querySelector(".img-main");
    const getDoggoBtn = document.querySelector("#getDoggoBtn");
    const midSection = document.querySelector(".midSection");
    const lowerSection = document.querySelector(".lowerSection");

    getDoggoBtn.addEventListener("click", loadNewDoggo)


    async function loadNewDoggo(){
        const link = await getDogLink();

        mainImg.src = link;

    }

    async function getDogLink(){
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        return data.message;
    }


    buttons.render(midSection)
    
    // splash1.render(lowerSection);
    // const splashContinueBtn = document.getElementById("splashContinueBtn")
    // splashContinueBtn.addEventListener("click", () => {
    //     const splashElement = lowerSection.firstElementChild;
    
    //     splashElement.classList.remove("show");
        
    //     splashElement.addEventListener('transitionend', () => {
    //         lowerSection.innerHTML = "";
    //         lists.render(lowerSection);
    //     }, { once: true }); 
    // });

    lists.render(lowerSection)




    const testyBtn = document.querySelector(".testyBtn");
    testyBtn.addEventListener("click", ()=>{
        console.log(pubsub.events)
    })
})