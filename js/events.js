import { menuExploration, menuHome, menuUniverse } from "./elements.js";

export default function Events({ home, universe, exploration }) {
  menuHome.addEventListener("click", () => {
    home();
  });

  menuUniverse.addEventListener("click", () => {
    universe();
  });

  menuExploration.addEventListener("click", () => {
    exploration();
  });
}
