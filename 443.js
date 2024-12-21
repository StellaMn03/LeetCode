var compress = function (chars) {
  let ind = 0;
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (i + 1 < chars.length && chars[i] == chars[i + 1]) {
      count++;
    } else {
      chars[ind++] = chars[i];
      if (count > 1) {
        let countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[ind++] = countStr[j];
        }
      }
      count = 1;
    }
  }
  return ind;
};
