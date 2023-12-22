export default function installMediaQueryWatcher(mediaQuery: string, layoutChangedCallback: (...args: any[]) => void) {
  var myQueryList = window.matchMedia(mediaQuery);
  myQueryList.addEventListener("change", (e) => layoutChangedCallback(e.matches))
  layoutChangedCallback(myQueryList.matches);
}