class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        
        n, temp = 0, x
        while temp > 0:
            n = n * 10 + temp % 10
            temp //= 10
        
        return n == x