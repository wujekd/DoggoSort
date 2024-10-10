import { pubsub } from "./pubsub.js"

export const lists = {
    //list: [[happy urls], [good list], [serious list]]
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
        pubsub.publish('happyUpdated', lists.list[0].size);

        const listHappy = document.querySelector(".listHappy")
        listHappy.innerHTML = '';
        lists.list[0].forEach(url => {
            const dogPic = document.createElement("img");
            dogPic.setAttribute("src", url);
            dogPic.addEventListener("click", lists.happyDeleted)
            listHappy.appendChild(dogPic)
        })
    },
    goodAdded: url => {
        console.log("url: ", url);
    },
    seriousAdded: url => {
        console.log("url: ", url);
    },

    happyDeleted: e => {
        let item = e.target;
        console.log(item)
        const url = item.getAttribute("src");
        // lists.list[0] = new Set(Array.from(lists.list[0]).filter((x)=> x != url));
        lists.list[0].delete(url);
        item.parentElement.removeChild(item);

        console.log(`removed the item ${url}`)
        pubsub.publish("happyUpdated", lists.list[0].size
        )
    
    }


}