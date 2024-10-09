import { pubsub } from "./pubsub.js";

export const buttons = {
    render: container => {
    let template = document.getElementById("buttonsTemplate");
    let buttonsElement = template.content.cloneNode(true);
    const addHappyBtn = buttonsElement.querySelector(".addHappyButton");
    const addGoodBtn = buttonsElement.querySelector(".addGoodBtn");
    const addSeriousBtn = buttonsElement.querySelector(".addSerious");

    addHappyBtn.addEventListener("click", buttons.addHappy); 

    container.appendChild(buttonsElement)
    },

    addHappy: function(){
        const url = document.querySelector(".img-main").getAttribute("src");
        if (url !== ""){
            pubsub.publish("happyAdded", url)
        } else { console.log("no doggo to add")}
    }
    
}