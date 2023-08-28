import { SceneValues, ColorValues } from "@/utils/Constants";
import { BaseScene } from "./BaseScene";

export default class Turkish extends BaseScene {
  constructor() {
    super(SceneValues.Turkish);
    console.log(`${SceneValues.Turkish} started`);
  }

  create() {
    super.createScene("Turkish", "Menu", SceneValues.MenuScene);

    this.menuItems = ["Breakfast"];
    super.setupMenu(this, this.menuItems, []);

    // Add click event to each menuItems
    this.addMenuItemsClickEvents();
  }
}
