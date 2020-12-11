export const getSpecial = (x: number, y: number) => ({
  x,
  y,
  x2: y ** 2 + y,
  y2: x ** 2 + x,
  // xy: x * y,
  // sx: Math.sin(x),
  // sy: Math.sin(y),
});
