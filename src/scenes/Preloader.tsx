import { ColorValues, SceneValues } from "@/utils/Constants";
import { addTextToScene } from "@/utils/helperMethods";
import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneValues.Preloader);
  }

  preload() {
    this.loadAssets();

    this.load.on("complete", () => {
      this.create();
    });
  }

  create() {
    const xPosition = this.cameras.main.width / 2;
    const yPosition = this.cameras.main.height / 2 + 200;

    // Add header text
    addTextToScene(this, "Welcome to Lingua Hub", this.cameras.main.width, 2);

    // Create button to start activity
    const buttonYPosition = yPosition - 300;
    const buttonRadius = 80;
    const buttonColor = ColorValues.SecondaryColor;

    const buttonBackground = this.add.circle(
      xPosition,
      buttonYPosition,
      buttonRadius + 5, // Add a border
      0x000000 // Black color for border
    );

    const button = this.add
      .circle(xPosition, buttonYPosition, buttonRadius, buttonColor)
      .setInteractive({ useHandCursor: true });

    button.setStrokeStyle(10, 0xefc53f);
    const buttonText = this.add.text(xPosition, buttonYPosition, "Start", {
      fontSize: "24px",
      color: String(ColorValues.BlackHexNotion),
    });
    buttonText.setOrigin(0.5);
    buttonText.setScale(1.5);

    button.on("pointerdown", () => {
      button.setScale(0.8);
      button.setAlpha(0.9);
      buttonText.setScale(1);
    });

    button.on("pointerup", () => {
      button.setScale(1.0);
      button.setAlpha(1);
      buttonText.setScale(1.5);
      this.startGame();
    });

    button.on("pointerout", () => {
      buttonBackground.setScale(1.0);
    });

    // Create wing sprites
    const wingLeft = this.add.sprite(xPosition - 100, yPosition, "wingLeft");
    const wingRight = this.add.sprite(xPosition + 100, yPosition, "wingRight");
    const bunnyReady = this.add.sprite(xPosition, yPosition, "bunnyReady");

    this.tweens.add({
      targets: [wingRight],
      y: "+=20",
      angle: "+=15", // Rotate by 15 degrees
      duration: 500,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: [wingLeft],
      y: "+=20",
      angle: "-=15", // Rotate by 15 degrees
      duration: 500,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: [bunnyReady],
      y: "+=20",
      duration: 700,
      yoyo: true,
      repeat: -1,
    });

    button.on("pointerdown", () => {
      this.startGame();
    });
  }

  startGame() {
    setTimeout(() => {
      this.scene.start(SceneValues.MenuScene);
    }, 500);
  }

  loadAssets() {
    this.load.image(
      "background",
      "assets/kenney-jumper/Background/bg_layer2.png"
    );
    this.load.image("wingLeft", "assets/kenney-jumper/Items/wing_left.png");
    this.load.image("wingRight", "assets/kenney-jumper/Items/wing_right.png");
    this.load.image(
      "bunnyReady",
      "assets/kenney-jumper/Players/bunny1_ready.png"
    );
    this.load.image("bubble", "assets/kenney-jumper/Items/bubble.png");
  }

  setBackground() {
    // Display the background sprite while preloading assets
    const background = this.add.sprite(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "background"
    );
    background.setOrigin(0.5);
  }
}
