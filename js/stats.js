import {pubsub} from "./pubsub.js"


export const stats = {
    list: [],
    render: container => {
        let template = document.getElementById("statsTemplate");
        const div = template.content.cloneNode(true).firstElementChild;
        container.appendChild(div);

        pubsub.subscribe("happyUpdated", stats.happyUpdated);
        // pubsub.subscribe("goodUpdated");
        // pubsub.subscribe("seriousUpdated");

        // pubsub.subscribe("happyRemoved");
        // pubsub.subscribe("goodRemoved");
        // pubsub.subscribe("seriousRemoved");
    },
    happyUpdated: x => {
        document.getElementById(
            "happyCounter"
        ).innerHTML = `Theres ${x} happy dogs`
    }
}