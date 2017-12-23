// Priority Queue Class
function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };

    this.enqueue = function (e) {
        if (this.collection.length === 0) {
            this.collection[0] = e;
        } else {
            for (let i = 0; i < this.collection.length; i++) {
                if (e[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, e);
                    return;
                }
            }
            this.collection[this.collection.length] = e;
            return;
        }
    };

    this.dequeue = function () {
        let item = this.collection[0][0];
        this.collection.shift();
        return item;
    };

    this.size = function () {
        return this.collection.length;
    };

    this.front = function () {
        return this.collection[0];
    };

    this.isEmpty = function () {
        return this.collection.length === 0;
    };
}