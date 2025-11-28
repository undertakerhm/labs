function iterate(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      callback(key, object[key], object);
    }
  }
}
