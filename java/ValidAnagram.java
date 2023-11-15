class ValidAnagram {
    public boolean isAnagram(String s, String t) {
        if (s.length() > t.length()) {
            return false;
        }

        int[] alphabets = new int[26];
        for (char c : s.toCharArray()) {
            alphabets[c - 'a']++;
        }

        for (char c : t.toCharArray()) {
            if (alphabets[c - 'a'] <= 0) {
                return false;
            }
            alphabets[c - 'a']--;
        }

        return true;
    }
}