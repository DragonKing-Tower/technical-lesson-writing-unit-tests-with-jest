//test js file
import { pointsForWord } from "./index.js";

describe("pointsForWord", () => {
  it("calculates the total points of a word: 1 per vowel and 2 per consonant.", () => {
    //define test value(input)
    const word = "test";

    //pass test value as an srgument to pointsforWord()
    const points = pointsForWord(word);

    //check output matches predone calcuations
    expect(points).toBe(7);
  });
  it("returns 0 for empty string:", () => {
    const word = "";

    const points = pointsForWord(word);

    expect(points).toBe(0);
  });
  it("ignores non-alphanumeric charactors", () => {
    const word = "hello!";

    const points = pointsForWord(word);

    expect(points).toBe(8);
  });
});
