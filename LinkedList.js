// Single LinkedList
function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.remove = function (e) {
        if (head.element === e) {
            head = head.next;
            length--;
            return;
        } else {
            let currentNode = head;
            let prevNode;
            while (currentNode.next) {
                if (currentNode.element === e) {
                    break;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = currentNode.next;
            return;
        }
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.indexOf = function (element) {
        let currentNode = head;
        for (let i = 0; i < length; i++) {
            if (currentNode.element === element) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }
        return -1;
    };

    this.elementAt = function (index) {
        if (head === null) {
            return undefined;
        } else {
            let currentNode = head;
            let count = -1;
            while (currentNode) {
                count++;
                if (count === index) {
                    return currentNode.element;
                }
                currentNode = currentNode.next;
            }
            return undefined;
        }
    };
}