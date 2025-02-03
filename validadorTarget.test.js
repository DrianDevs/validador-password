const { validateTarget } = require("./validadorTarget");

test("Ambas coordenadas correctas", () => {
  expect(validateTarget(20, 100)).toBe(true);
});

test("lat incorrecta", () => {
  expect(validateTarget(2, 100)).toBe(false);
});

test("lon incorrecta", () => {
  expect(validateTarget(20, 200)).toBe(false);
});

test("Ambas coordenadas incorrectas", () => {
  expect(validateTarget(200, 200)).toBe(false);
});

test("1 coordenada de tipo string", () => {
  expect(validateTarget(200, 200)).toBe(false);
});

test("Ambas coordenada de tipo string", () => {
  expect(validateTarget("prueba1", "prueba2")).toBe(false);
});
