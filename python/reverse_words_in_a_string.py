class ReverseWordsInAString:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])