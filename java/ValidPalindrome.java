class ValidPalindrome {
    public boolean isPalindrome(String s) {
        char[] chars = s.toCharArray();

        int left = 0, right = chars.length - 1;
        while (left < right) {
            if (!Character.isLetterOrDigit(chars[left])) {
                left++;
            } else if (!Character.isLetterOrDigit(chars[right])) {
                right--;
            } else if (Character.toLowerCase(chars[left]) != Character.toLowerCase(chars[right])) {
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
    }
}