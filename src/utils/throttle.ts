export const throttle = (gapTime: number, fn: (...p: any[]) => void) => {
  let lastTime: number | null = null;
  return (...params: any[]) => {
    let nowTime = +new Date();
    if (!lastTime || nowTime - lastTime > gapTime) {
      fn(...params);
      lastTime = nowTime;
    }
  };
};
