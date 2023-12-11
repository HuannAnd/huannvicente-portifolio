import isServerRendering from "./is-server-rendering"

const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  && !isServerRendering
export default isMobileDevice 