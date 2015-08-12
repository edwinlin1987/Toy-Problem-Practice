/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;
    var first = head.next;
    var step = 0;
    
    while (first !== null) {
        step++;
        if (first === head) return true;
        if (step%2 === 0) head = head.next;
        first = first.next;
    }
    return false;
};