import { SceneValues, ColorValues } from "@/utils/Constants";
import { BaseScene } from "./BaseScene";

export default class Turkish extends BaseScene {
  constructor() {
    super(SceneValues.Turkish);
    console.log(`${SceneValues.Turkish} started`);
  }

  create() {
    super.createScene("Turkish", "Menu", SceneValues.MenuScene);
    super.setupMenu(this, ["Breakfast"], [])
  }
  
}
