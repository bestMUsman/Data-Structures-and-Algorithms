// Double LinkedList
let Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

let DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.add = function (data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.length++;
            return;
        }

        let currentNode = this.head;
        let previousNode;
        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = node;
        currentNode.next = node;
        node.prev = currentNode;
        this.length++;
        return;
    };

    this.remove = function (e) {
        if (this.head === null) {
            return null;
        } else {
            if (this.head.data === e) {
                this.head = this.head.next;
                this.head.prev = null;
                return;
            } else if (this.tail.data === e) {
                this.tail = this.tail.prev;
                this.tail.next = null;
                return;
            } else {
                let currentNode = this.head;
                let prevNode;
                while (currentNode && currentNode.data !== e) {
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }

                if (!currentNode) {
                    return null;
                } else {
                    let nextNode = currentNode.next;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    return;
                }
            }
        }
    };

    this.reverse = function () {
        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;
            while (currentNode) {
                [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];
                currentNode = currentNode.prev;
            }
            [this.head, this.tail] = [this.tail, this.head];
        }
    };
};
