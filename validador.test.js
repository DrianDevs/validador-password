const { validatePassword } = require("./validador");

test("Probar password valida", () => {
  expect(validatePassword("Abc123!@#")).toBe(true);
});

test("Prueba password sin 8 caracteres", () => {
  expect(validatePassword("Abc3@")).toBe(false);
});

test("Prueba password sin letra mayuscula", () => {
  expect(validatePassword("abc123!@#")).toBe(false);
});

test("Prueba password sin letra minuscula", () => {
  expect(validatePassword("ABC123!@#")).toBe(false);
});

test("Prueba password sin numero", () => {
  expect(validatePassword("abcdef!@#")).toBe(false);
});

test("Prueba password sin caracter especial", () => {
  expect(validatePassword("Abc123456")).toBe(false);
});
