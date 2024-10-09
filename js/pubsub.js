export const pubsub = {

    events: {},
    subscribe: function(evName, fn) {
        console.log(`someone subbed to ${evName}`);
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn);
    },

    unsubscribe: function(evName, fn) {
        console.log("some1 unsubbed");

        if (this.events[evName]) {
            this.events[evName] = this.events[evName].filter(f => f !== fn);
        }
    },
    publish: function(evName, data) {
        console.log(`publishing ${evName} with ${data}`);
        if (this.events[evName]) {
            this.events[evName].forEach(f => {
                f(data)
            })
        }
    }
}