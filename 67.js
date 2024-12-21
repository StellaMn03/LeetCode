var addBinary = function (a, b) {
  let res = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let aBit = i >= 0 ? Number(a[i--]) : 0;
    let bBit = j >= 0 ? Number(b[j--]) : 0;
    let sum = aBit + bBit + carry;
    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
  }

  return res;
};
