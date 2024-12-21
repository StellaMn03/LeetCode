var maxVowels = function (s, k) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      count++;
    }
  }
  let count2 = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.indexOf(s[i - k]) != -1) {
      count--;
    }
    if (vowels.indexOf(s[i]) != -1) {
      count++;
    }
    count2 = Math.max(count2, count);
  }
  return count2;
};
