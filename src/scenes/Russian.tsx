import { SceneValues } from "@/utils/Constants";
import { BaseScene } from "./BaseScene";

export default class Russian extends BaseScene {
  constructor() {
    super(SceneValues.Russian);
    console.log(`${SceneValues.Russian} started`);
  }

  create() {
    this.createScene("Russian", "Menu", SceneValues.MenuScene);
    this.setupMenu(this, ["Breakfast"], [])
  }
}
