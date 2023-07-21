class Solution:
    def myAtoi(self, s: str) -> int:
        # remove all leading spaces
        s = s.lstrip()

        # count number of positive and negative signs
        i, positive, negative = 0, 0, 0
        if i < len(s) and s[i] == '+':
            positive += 1
            i += 1

        if i < len(s) and s[i] == '-':
            negative += 1
            i += 1
        
        # ensure no 2 signs exist
        if positive > 0 and negative > 0:
            return 0

        # keep track number of digits
        ans = 0
        while i < len(s) and s[i].isnumeric():
            ans = ans * 10 + int(s[i])
            i += 1

        ans = -ans if negative > 0 else ans

        if ans > 2**31 - 1:
            ans = 2**31 - 1
        
        if ans < -2**31:
            ans = -2**31
        
        return ans