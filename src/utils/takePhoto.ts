const takePhoto = (
  targetVideo: HTMLVideoElement | HTMLImageElement | HTMLCanvasElement,
  canvasElement: HTMLCanvasElement,
  width: number,
  height: number
) => {
  canvasElement.getContext('2d')?.drawImage(targetVideo, 0, 0, width, height);
};

export default takePhoto;
