function sumDoWhile(...args) {
  if (args.length === 0) return 0;

  let s = 0;
  let i = 0;
  do {
    s += args[i];
    i++;
  } while (i < args.length);

  return s;
}
