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
var reverseList = function(head) {
  if (!head || head.next === null) return head;
  var currentHead;
  var newHead = head;
  var oldHead = head.next;
  newHead.next = null;
  while (currentHead !== null) {
    if (oldHead.next !== null) {
      currentHead = oldHead.next;
      oldHead.next = newHead;
      newHead = oldHead;
      oldHead = currentHead;
    }
    else {
      oldHead.next = newHead;
      newHead = oldHead;
      currentHead = null;
    }

  }
  return newHead; 
};
