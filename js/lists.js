import { pubsub } from "./pubsub.js"

export const lists = {
    list: [[],[],[]],
    render: container => {
        let template = document.getElementById("listsTemplate");
        let div = template.content.cloneNode(true).firstElementChild;
        container.appendChild(div);
        setTimeout(()=>{
            div.classList.add("show");
        }, 5)

    
        pubsub.subscribe("happyAdded", lists.happyAdded);
        pubsub.subscribe("goodAdded", lists.goodAdded);
        pubsub.subscribe("seriousAdded", lists.seriousAdded);

    },

    happyAdded: url => {
        let newHappyList = new Set(lists.list[0]);
        newHappyList.add(url);
        lists.list[0] = newHappyList;

        console.log(lists.list[0])
        // pubsub.publish('happyUpdated', lists.list[0]);

        const listHappy = document.querySelector(".listHappy")
        listHappy.innerHTML = '';
        lists.list[0].forEach(url => {
            const dogPic = document.createElement("img");
            dogPic.setAttribute("src", url);
            listHappy.appendChild(dogPic)
        })
    },
    goodAdded: url => {
        console.log("url: ", url);
    },
    seriousAdded: url => {
        console.log("url: ", url);
    },


}