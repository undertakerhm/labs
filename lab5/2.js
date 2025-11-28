function array() {
  const arr = [];

  return {
    push(value) { arr.push(value); },
    pop() { return arr.pop(); },
    at(index) { return arr[index]; }
  };
}

const a = array();

a.push('first');
a.push('second');
a.push('third');

console.log(a.at(0)); // first
console.log(a.at(1)); // second
console.log(a.at(2)); // third

console.log(a.pop()); // third
console.log(a.pop()); // second
console.log(a.pop()); // first
console.log(a.pop()); // undefined
