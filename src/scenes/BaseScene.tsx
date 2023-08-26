import { addTextToScene, addButtonToScene, setupMenu } from "@/utils/helperMethods";
import Phaser from "phaser";
import { type ButtonConfigurations } from "@/utils/GameTypes";
import { DefaultButtonConfigurations } from "@/utils/Constants";

export class BaseScene extends Phaser.Scene {
  constructor(key: string) {
    super({ key: key });
  }

  createScene(title: string, buttonText: string, targetScene: string, buttonConfigurations: ButtonConfigurations | {} = {}) {

    const buttonConfig = {
      ...DefaultButtonConfigurations,
      ...buttonConfigurations,
    }

    const text = addTextToScene(this, title, this.cameras.main.width, 3);

    const button = addButtonToScene(this, buttonText, this.cameras.main.width / 2, text.y, buttonConfig);

    button.on("pointerup", () => {
      this.scene.start(targetScene);
    });
  }

  setupMenu(scene: Phaser.Scene, buttonsLabel: string[], scenesForButtonClick: Phaser.Scene[]) {
    setupMenu(scene, buttonsLabel, scenesForButtonClick)
  }
}
