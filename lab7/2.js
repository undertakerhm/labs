function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function removeElements(array, ...items) {
  for (const item of items) {
    removeElement(array, item);
  }
}
