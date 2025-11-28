function sumForOf(...args) {
  let s = 0;
  for (const n of args) {
    s += n;
  }
  return s;
}
