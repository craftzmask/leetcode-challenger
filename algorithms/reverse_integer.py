class Solution:
    def reverse(self, x: int) -> int:
        negative = True if x < 0 else False
        
        x, ans = abs(x), 0
        while x > 0:
            ans = ans*10 + abs(x) % 10
            x //= 10
        
        ans = -ans if negative else ans
        
        return ans if (-2**31 <= ans <= 2**31 - 1) else 0