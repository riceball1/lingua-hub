import { SceneValues } from "@/utils/Constants";
import { BaseScene } from "./BaseScene";

export default class Hindi extends BaseScene {
  constructor() {
    super(SceneValues.Hindi);
    console.log(`${SceneValues.Hindi} started`);
  }

  create() {
    this.createScene("Hindi", "Menu", SceneValues.MenuScene);
    this.setupMenu(this, ["Breakfast"], [])
  }
}
