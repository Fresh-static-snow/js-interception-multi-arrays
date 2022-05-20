const sortNumbers = require("./sortNumbers");

test("Sort even numbers in ascending order", () => {
  expect(sortNumbers([12, 4, 6, 22, 8, 2])).toEqual([2, 4, 6, 8, 12, 22]);
});

test("Sort odd numbers in descending order", () => {
  expect(sortNumbers([7, 1, 3, 13, 21, 9])).toEqual([21, 13, 9, 7, 3, 1]);
});

test("Sort even in asc then odd in desc order", () => {
  expect(sortNumbers([12, 7, 4, 1, 6, 3])).toEqual([4, 6, 12, 7, 3, 1]);
});

