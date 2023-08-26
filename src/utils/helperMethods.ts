import Phaser from "phaser";

export function addTextToScene(scene: Phaser.Scene, text: string, cameraWidth: number, scale: number = 1) {
  const centerX = cameraWidth / 2;

  const textStyle = {
    fontSize: "24px",
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: {
      x: 10,
      y: 5
    }
  };

  const textObj = scene.add.text(centerX, 20, text, textStyle)
    .setOrigin(0.5, 0);

    textObj.setScale(scale)


  return textObj;
}
