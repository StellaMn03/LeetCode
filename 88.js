var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let k = 0;
  let temp = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      temp[k++] = nums1[i++];
    } else {
      temp[k++] = nums2[j++];
    }
  }
  while (i < m) {
    temp[k++] = nums1[i++];
  }
  while (j < n) {
    temp[k++] = nums2[j++];
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = temp[i];
  }
  return nums1;
};
