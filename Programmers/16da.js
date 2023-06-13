function soluction(message) {
  for (let i = 0; i < Array.length; i++) {
    const item = array[i];
    if (maxValue < item) {
      masValue = item;
      maxIndex = i;
    }
  }
  return [maxValue, maxIndex];
}
