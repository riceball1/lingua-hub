import Phaser from "phaser";
import { SceneValues } from "./GameTypes";

export function addTextToScene(
  scene: Phaser.Scene,
  text: string,
  cameraWidth: number,
  scale: number = 1
) {
  const centerX = cameraWidth / 2;

  const textStyle = {
    fontSize: "24px",
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: {
      x: 10,
      y: 5,
    },
  };

  const textObj = scene.add.text(
    centerX,
    20,
    text,
    textStyle
  );

  textObj.setOrigin(0.5, 0)
  textObj.setScale(scale);

  return textObj;
}

export function addButtonToScene(
  scene: Phaser.Scene,
  text: string,
  x: number,
  y: number,
  scale: number = 1
) {
  const container = scene.add.container(x, y + 150);

  const buttonBackground = scene.add.graphics();
  buttonBackground.fillStyle(0xaaffaa, 1);

  const width = 100;
  const height = 60;
  const borderRadius = 20;

  buttonBackground.fillRoundedRect(
    -width / 2,
    -height / 2,
    width,
    height,
    borderRadius
  );

  container.add(buttonBackground);

  const buttonText = scene.add
    .text(0, 0, text, {
      fontSize: "20px",
      color: "#000",
    })
    .setOrigin(0.5)
    .setScale(scale);

  container.add(buttonText);

  container.setInteractive(
    new Phaser.Geom.Rectangle(-width / 2, -height / 2, width, height),
    Phaser.Geom.Rectangle.Contains
  );

  container.on("pointerup", () => {
    console.log("Menu button clicked");
    scene.scene.start(SceneValues.MenuScene);
  });

  return container;
}
