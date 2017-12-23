/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = function(head) {
    let arr = [];
    let currentNode = head;
    while (currentNode !== null) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    arr = arr.sort((a,b) => a-b);
    currentNode = head;
    for (let i = 0; i < arr.length; i++) {
        currentNode.val = arr[i];
        currentNode = currentNode.next;
    }
    return head; 
};