function sumWhile(...args) {
  let s = 0;
  let i = 0;
  while (i < args.length) {
    s += args[i];
    i++;
  }
  return s;
}
