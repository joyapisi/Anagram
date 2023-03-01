module.exports = function (str1, str2) {
  // write your code here
  str1 = str1.toLowerCase().replace(/[^a-z]/gi, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/gi, '');
  return str1.split('').sort().join('')===str2.split('').sort().join('');
}

