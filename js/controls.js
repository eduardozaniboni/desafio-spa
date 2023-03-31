import { menuExploration, menuHome, menuUniverse } from "./elements.js";

export default function Controls() {
  function homeBold() {
    menuHome.classList.add("current-page");
    menuUniverse.classList.remove("current-page");
    menuExploration.classList.remove("current-page");
  }

  function universeBold() {
    menuHome.classList.remove("current-page");
    menuUniverse.classList.add("current-page");
    menuExploration.classList.remove("current-page");
  }

  function explorationBold() {
    menuHome.classList.remove("current-page");
    menuUniverse.classList.remove("current-page");
    menuExploration.classList.add("current-page");
  }

  return {
    homeBold,
    universeBold,
    explorationBold,
  };
}
