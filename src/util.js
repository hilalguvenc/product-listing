export function splitProductsIntoThreeParts(products) {
  const result = [[], [], []];
  const productsParts = products.length / 3;

  for (let line = 0; line < 3; line++) {
    for (let i = 0; i < productsParts; i++) {
      const value = products[i + line * productsParts];
      if (!value) continue;
      result[line].push(value);
    }
  }

  return result;
}