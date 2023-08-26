import { SceneValues } from "@/utils/GameTypes";
import { BaseScene } from "./BaseScene";

export default class About extends BaseScene {
  constructor() {
    super(SceneValues.About);
    console.log(`${SceneValues.About} started`);
  }

  create() {
    this.createScene("About", "Menu", SceneValues.MenuScene);
  }
}
