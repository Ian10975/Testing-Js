const {sum, multiply, divide, average, subtract, isEven
} = require('./02-math.js')



test("add 1 + 3 should be 4", () => {
    const result = sum(1,3);
    expect(result).toBe(4)
});

test("should be 4", () => {
    const result = multiply(1,4);
    expect(result).toBe(4)
});

test("should divide", () => {
    const result = divide(4,2);
    expect(result).toBe(2)

    const result2 = divide(4,2);
    expect(result2).toBe(2)

    const result3 = divide(4,0);
    expect(result3).toBeNull()

});

test("Average of 3, 7 and 11", () =>{
  const values= [3, 7, 11];
  const result= average(values);
  expect (result).toBe(7)
})

test("Average of nothing should be 0", () =>{
  const values= [];
  const result= average(values);
  expect (result).toBe(0)
})
// Ejercicio 1
test("subtract 10 - 3 should be 7", () => {
    const result = subtract(10, 3);
    expect(result).toBe(7);
});

test("subtract 3 - 10 should be -7", () => {
    const result = subtract(3, 10);
    expect(result).toBe(-7);
});
 // Agregué el mismo test pero con un resultado diferente para revisar que hay fallas en el test
test("subtract 10 - 3 should be 7", () => {
    const result = subtract(10, 2);
    expect(result).toBe(7);
});

test("subtract 3 - 10 should be -7", () => {
    const result = subtract(5, 10);
    expect(result).toBe(-7);
});

//Ejercicio 2
test("10 should be even", () => {
    expect(isEven(10)).toBe(true);
});

test("3 should be odd", () => {
    expect(isEven(3)).toBe(false);
});

test("0 should be even", () => {
    expect(isEven(0)).toBe(true);
});
//otro ejemplo con resultados diferentes
test("10 should be even", () => {
    expect(isEven(3)).toBe(true);
});

test("3 should be odd", () => {
    expect(isEven(10)).toBe(false);
});

test("0 should be even", () => {
    expect(isEven(0)).toBe(true);
});
