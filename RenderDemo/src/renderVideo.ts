export function loadVideoFromPath(path: string) {
  const video = document.querySelector('video');
  if (video === null) throw new Error('video element not found');
  video.src = path;
  video.controls = true;

}