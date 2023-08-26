import { SceneValues } from "@/utils/Constants";
import { BaseScene } from "./BaseScene";

export default class Korean extends BaseScene {
  constructor() {
    super(SceneValues.Korean);
    console.log(`${SceneValues.Korean} started`);
  }

  create() {
    this.createScene("Korean", "Menu", SceneValues.MenuScene);
  }
}
