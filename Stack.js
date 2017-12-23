// Stack Class
function Stack() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };

    this.push = function (e) {
        collection[collection.length] = e;
    };

    this.peek = function () {
        return collection[collection.length - 1];
    };

    this.pop = function () {
        let lastItem = collection[collection.length - 1];
        collection.splice(lastItem, 1);
        return lastItem;
    };

    this.isEmpty = function () {
        return collection.length === 0;
    };

    this.clear = function () {
        collection = [];
    };
}