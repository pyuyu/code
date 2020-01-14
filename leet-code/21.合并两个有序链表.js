/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1)
    let l3 = head
    while(l1 && l2){
        if(l1.val < l2.val){
            l3.next = l1
            l1 = l1.next
        } else {
            l3.next = l2
            l2 = l2.next
        }
        l3 = l3.next
    }
    l3.next = l1 === null ? l2 : l1;
    return head.next;
};
// @lc code=end

