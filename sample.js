function countDigit(num) {
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigit(2345));

