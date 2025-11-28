function seq(...funcs) {
  function chain(arg) {
    if (typeof arg === 'number') {
      return funcs.reduceRight((acc, fn) => fn(acc), arg);
    }
    funcs.push(arg);
    return chain;
  }
  return chain;
}

console.log( seq(x => x + 7)(x => x * 2)(5) );       // 17
console.log( seq(x => x * 2)(x => x + 7)(5) );       // 24
console.log( seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7) ); // 3