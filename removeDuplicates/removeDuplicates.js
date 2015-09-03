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
var deleteDuplicates = function(head) {
  var current = head;
  if (!current) return head;
  while (current.next !== null) {
    if (current.val === current.next.val) current.next = current.next.next;
    else current = current.next;
  }  
  return head;
};
