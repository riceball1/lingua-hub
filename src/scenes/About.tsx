import { BaseScene } from "./BaseScene";
import { addHoverToText, addTextToScene } from "@/utils/helperMethods";
import { ColorValues, SceneValues } from "@/utils/Constants";

export default class About extends BaseScene {
  constructor() {
    super(SceneValues.About);
    console.log(`${SceneValues.About} started`);
  }

  create() {
    this.createScene("About", "Menu", SceneValues.MenuScene);
    this.generateAboutContent();
  }

  generateAboutContent() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const container = this.add.container(centerX, centerY + 50);
    const square = this.add.graphics();
    square.fillStyle(ColorValues.WhiteHex, 1);

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

    const text = addTextToScene(
      this,
      " Lingua Hub is a language learning app using simple playful quizzes to help learners understand the basics of another language.",
      container.width,
      0.8
    );
    text.setY(square.y - 180);

    const text2 = addTextToScene(
      this,
      " The languages available to try currently are Türkçe (Turkish), हिंदी (Hindi), 한국어 (Korean), Русский (Russian",
      container.width,
      0.8
    );
    text2.setY(-50);

    const text3 = addTextToScene(
      this,
      "Please reach out if you have any questions!",
      container.width,
      0.8
    );

    text3.setY(-text2.y * 4 - 100);

    const text4 = addTextToScene(
      this,
      "https://github.com/riceball1",
      container.width,
      0.8
    );

    text4.setY(-text2.y * 5 - 100);

    const textContent = [text, text2, text3, text4];

    textContent.forEach((textItem, index) => {
      textItem.setFill(ColorValues.BlackHexNotion);
      textItem.setBackgroundColor(ColorValues.Transparent);
      textItem.setWordWrapWidth(width);
      container.add(textItem);
      textItem.setAlign("justify");

      if (index === 3) {
        textItem.setInteractive();
        textItem.setFill(ColorValues.BlueHexNotion);

        addHoverToText(textItem, true, ColorValues.BlueHexNotion);

        textItem.on("pointerup", () => {
          window.open("https://github.com/riceball1", "_blank");
        });
      }
    });
  }
}
