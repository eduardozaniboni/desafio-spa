import Router from "./router.js";
import Events from "./events.js";
import Controls from "./controls.js";
import { menuHome, menuUniverse, menuExploration } from "./elements.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add("/error", "/pages/error.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const controls = Controls({
  menuHome,
  menuUniverse,
  menuExploration,
});

Events({
  home: controls.homeBold,
  universe: controls.universeBold,
  exploration: controls.explorationBold,
});
