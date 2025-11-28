function max(matrix) {
  let m = -Infinity;

  for (const row of matrix) {
    for (const el of row) {
      if (el > m) m = el;
    }
  }

  return m;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
