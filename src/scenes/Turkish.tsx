import { SceneValues } from "@/utils/GameTypes";
import { BaseScene } from "./BaseScene";

export default class Turkish extends BaseScene {
  constructor() {
    super(SceneValues.Turkish);
    console.log(`${SceneValues.Turkish} started`);
  }

  create() {
    this.createScene("Turkish", "Menu", SceneValues.MenuScene);
  }
}