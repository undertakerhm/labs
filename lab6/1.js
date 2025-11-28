function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('pipe: all arguments must be functions');
    }
  }

  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

 