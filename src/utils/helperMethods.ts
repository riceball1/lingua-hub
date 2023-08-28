import Phaser from "phaser";
import { type ButtonConfigurations } from "@/utils/GameTypes";
import {
  ColorValues,
  SceneValues,
  DefaultButtonConfigurations,
} from "@/utils/Constants";

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
    backgroundColor: String(ColorValues.BlackHexNotion),
    padding: {
      x: 20,
      y: 5,
    },
  };

  const textObj = scene.add.text(centerX, 20, text, textStyle);

  textObj.setOrigin(0.5, 0);
  textObj.setScale(scale);

  return textObj;
}

export function addButtonToScene(
  scene: Phaser.Scene,
  text: string,
  x: number,
  y: number,
  buttonConfigurations: ButtonConfigurations
) {
  const buttonConfig = {
    ...DefaultButtonConfigurations,
    ...buttonConfigurations,
  };

  const {
    scale,
    buttonBackgroundColor,
    buttonTextColor,
    hasHoverBackgroundColor,
  } = buttonConfig;
  const container = scene.add.container(x, y + 150);

  const buttonBackground = scene.add.graphics();
  buttonBackground.fillStyle(buttonBackgroundColor, 1);

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
      color: buttonTextColor,
    })
    .setOrigin(0.5)
    .setScale(scale);

  container.add(buttonText);

  buttonBackground.setInteractive(
    new Phaser.Geom.Rectangle(-width / 2, -height / 2, width, height),
    Phaser.Geom.Rectangle.Contains
  );

  buttonBackground.on("pointerup", () => {
    console.log("Menu button clicked");
    scene.scene.start(SceneValues.MenuScene);
  });

  buttonText.setInteractive(
    new Phaser.Geom.Rectangle(-width / 2, -height / 2, width, height),
    Phaser.Geom.Rectangle.Contains
  );

  buttonText.on("pointerup", () => {
    console.log("Menu button clicked");
    scene.scene.start(SceneValues.MenuScene);
  });

  addHoverToText(buttonText, hasHoverBackgroundColor);

  return container;
}

export function addHoverToText(
  obj: Phaser.GameObjects.Text,
  hasBackgroundColor: boolean = false,
  defaultTextColor: string = ColorValues.BlackHexNotion
) {
  const backgroundColor: string = hasBackgroundColor
    ? ColorValues.BlackHexNotion
    : ColorValues.Transparent;

  obj.setInteractive({ useCursor: true });

  obj.on("pointerover", () => {
    obj.setColor(ColorValues.SecondaryHexColor);
    obj.setBackgroundColor(backgroundColor);
  });

  obj.on("pointerout", () => {
    obj.setColor(defaultTextColor);
    obj.setBackgroundColor(ColorValues.Transparent);
  });
}

export function setupMenu(
  scene: Phaser.Scene,
  buttonsArray: string[],
  scenesForButtonClick: Phaser.Scene[]
) {
  console.log("setup menu");

  const centerX = scene.cameras.main.width / 2;
  const centerY = scene.cameras.main.height / 2 + 50;

  const container = scene.add.container(centerX, centerY);

  const square = scene.add.graphics();
  square.fillStyle(Number(ColorValues.PrimaryColor), 1);
  const width = 400;
  const height = 400;
  const borderRadius = 20;

  square.fillRoundedRect(-width / 2, -height / 2, width, height, borderRadius);

  container.add(square);

  // Calculate button positions inside the square
  const buttonSpacing = 60;
  const startButtonY = square.y - 120;

  // Create buttons dynamically
  buttonsArray.forEach((label, index) => {
    const button = scene.add
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
      scene.scene.start(scenesForButtonClick[index]);
    });

    container.add(button);
  });

  scene.add.existing(container);
}
