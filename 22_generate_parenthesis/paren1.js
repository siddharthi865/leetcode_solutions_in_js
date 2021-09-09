function generateParenthesis(n) {
  const res = [];

  function go(l, r, s) {
    if (l > r) return;

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + "(");
    if (r > 0) go(l, r - 1, s + ")");
  }

  go(n, n, "");
  return res;
}

module.exports = generateParenthesis;
