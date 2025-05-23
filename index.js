//write code to pass test

export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      points += 1;
    } else if (/[a-z]/i.test(char)) {
      points += 2;
    } else {
      points += 0;
    }
  }
  return points;
}
