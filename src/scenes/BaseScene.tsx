import { addTextToScene, addButtonToScene } from "@/utils/helperMethods";
import Phaser from "phaser";

export class BaseScene extends Phaser.Scene {
  constructor(key: string) {
    super({ key: key });
  }

  createScene(title: string, buttonText: string, targetScene: string) {
    const text = addTextToScene(this, title, this.cameras.main.width, 3);

    const button = addButtonToScene(this, buttonText, this.cameras.main.width / 2, text.y);

    button.on("pointerup", () => {
      this.scene.start(targetScene);
    });
  }
}
