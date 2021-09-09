const generateParenthesis = require("./paren1");

test("() is a valid parentheses", () => {
  expect(generateParenthesis(3)).toStrictEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});

test("()[]{} is a valid parentheses", () => {
  expect(generateParenthesis(1)).toStrictEqual(["()"]);
});
