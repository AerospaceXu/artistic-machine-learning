export const getSpecial = (keypoints: any) => {
  let inputs = [];
  for (let i = 0; i < keypoints.length; i++) {
    let x = keypoints[i].position.x;
    let y = keypoints[i].position.y;
    inputs.push(x);
    inputs.push(y);
  }
  return inputs;
};
