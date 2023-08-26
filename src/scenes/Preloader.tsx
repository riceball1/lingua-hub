import { SceneValues } from "@/utils/Constants";
import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneValues.Preloader);
  }

  preload() {
    // Preload assets
  }

  create() {
    this.scene.launch(SceneValues.MenuScene);
  }
}
