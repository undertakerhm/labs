function composeRight(...fns) {
  const handlers = [];

  const composed = function (value) {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];

        if (typeof fn !== 'function') {
          throw new Error('composeRight: arguments must be functions');
        }

        value = fn(value);
      }
      return value;
    } catch (err) {
      for (const h of handlers) h(err);
      return undefined;
    }
  };

  composed.on = function (event, handler) {
    if (event === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
    return composed;
  };

  return composed;
}
const boom = () => { throw new Error("bad"); };
const inc = x => x + 1;

const f = composeRight(inc, boom, inc);

f.on('error', e => {
  console.log("Error:", e.message);
});

console.log(f(5));
