function contarFrequencia(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("O argumento precisa ser um array");
  }

  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(contarFrequencia([1, 2, 2, 3, 3, 3]));
