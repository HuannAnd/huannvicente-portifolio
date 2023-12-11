import isServerRendering from "./is-server-rendering"

let isMobileDevice: boolean | undefined = undefined;

if (!isServerRendering) {
  isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}


console.log("isMobileDevice", isMobileDevice)
export default isMobileDevice 