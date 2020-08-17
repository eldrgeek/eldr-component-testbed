const async setupStreams = () => {
  let promise
  const constraints = {
    audio: true,
    video: true
  };
  return navigator.mediaDevices
    .getUserMedia(constraints)
    .catch((e) => console.log(e.toString()));
};
export default setupStreams