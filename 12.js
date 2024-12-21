var intToRoman = function (num) {
  const values = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (let i = 0; i < values.length; ++i) {
    let val = values[i][0];
    let sym = values[i][1];
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
};
