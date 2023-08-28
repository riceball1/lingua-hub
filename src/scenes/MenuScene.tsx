import { ColorValues, SceneValues } from "@/utils/Constants";
import { addHoverToText, addTextToScene } from "@/utils/helperMethods";
import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super(SceneValues.MenuScene);
    console.log("MenuScene started");
  }

  create() {
    addTextToScene(this, "Menu", this.cameras.main.width, 3);
    this.setupMenu();
  }

  setupMenu() {
    console.log("setup menu");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const container = this.add.container(centerX, centerY);

    const square = this.add.graphics();
    square.fillStyle(Number(ColorValues.PrimaryColor), 1);
    const width = 400;
    const height = 400;
    const borderRadius = 20;

    square.fillRoundedRect(
      -width / 2,
      -height / 2,
      width,
      height,
      borderRadius
    );

    container.add(square);

    // Array of button labels
    const buttons = [
      "About Lingua Hub",
      "Türkçe (Turkish)",
      "हिंदी (Hindi)",
      "한국어 (Korean)",
      "Русский (Russian)",
    ];

    // Scenes to launch on button click
    const scenes = [
      SceneValues.About,
      SceneValues.Turkish,
      SceneValues.Hindi,
      SceneValues.Korean,
      SceneValues.Russian,
    ];

    // Calculate button positions inside the square
    const buttonSpacing = 60;
    const startButtonY = square.y - 120;

    // Create buttons dynamically
    buttons.forEach((label, index) => {
      const button = this.add
        .text(square.x, startButtonY + index * buttonSpacing, label, {
          fontSize: "20px",
          color: String(ColorValues.WhiteHexNotion),
          padding: {
            y: 10,
            x: 10,
          },
        })
        .setOrigin(0.5)
        .setScale(1.5)
        .setInteractive({ useHandCursor: true, tabIndex: 0 });

      addHoverToText(button, true, ColorValues.WhiteHexNotion);

      button.on("pointerup", () => {
        console.log(`${label} clicked`);
        this.scene.start(scenes[index]);
      });

      container.add(button);
    });

    this.add.existing(container);
  }
}
