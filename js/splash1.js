import {pubsub} from './pubsub.js';


export const splash1 = {
    list: [],
    render: container => {
        let template = document.querySelector("#splash1Template");
        let div = template.content.cloneNode(true).firstElementChild;
        container.appendChild(div);
        setTimeout(()=> {
            div.classList.add("show")
        }, 200)
        
    }
}