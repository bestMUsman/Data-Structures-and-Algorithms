// Set Class
function Set() {
    let collection = [];
    this.has = function (element) {
        return collection.indexOf(element) !== -1;
    };

    this.values = function () {
        return collection;
    };

    this.add = function (element) {
        if (this.has(element) === false) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function (element) {
        if (this.has(element)) {
            collection.splice(collection.indexOf(element), 1);
            return true;
        }
        return false;
    };

    this.size = function () {
        return collection.length;
    };

    this.union = function (arr) {
        arr = arr.values();
        collection = collection.concat(
            arr.filter(function (item, pos) {
                return collection.indexOf(item) == -1;
            })
        );
        return this;
    };

    this.difference = function () {
        arr = arr.values();
        return arr.filter((item) => {
            return collection.indexOf(item) === -1;
        });
    };
}