import { BaseScene } from "./BaseScene";
import { SceneValues } from "@/utils/Constants";

export default class ActivityScene extends BaseScene {
  private quizData!: JSON;

  constructor() {
    super(SceneValues.Activity);
  }

  init(data: { quizData: JSON }): void {
    this.quizData = data.quizData; // Store the quiz data for later use
  }

  create(): void {
    // Use this.quizData to generate the game activity
    // ...
  }
}
