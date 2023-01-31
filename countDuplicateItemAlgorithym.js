function countDuplicateValue(candles) {
  var maxHeight = Math.max(...candles);
  var maxHeightCount = 0;
  for (var i = 0; i < candles.length; i++) {
    if (candles[i] == maxHeight) {
      maxHeightCount += 1;
    }
  }
  return maxHeightCount;
}
console.log(countDuplicateValue([3, 1, 3]));
console.log(Math.round(70/5)*5)