# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
      
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        unique = set()
        dummy = ListNode(-101)
        current = dummy

        while head:
            if head.val not in unique:
                unique.add(head.val)
                current.next = ListNode(head.val)
                current = current.next
            head = head.next
        
        return dummy.next