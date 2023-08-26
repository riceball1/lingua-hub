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

export function addButtonToScene(scene: Phaser.Scene, text: string, x: number, y: number) {
    const button = scene.add.text(x, y + 150, text, {
      fontSize: "20px",
      color: "#000",
      backgroundColor: '#AAFFAA',
      padding: {
        x: 10,
        y: 5,
      },
    })
      .setOrigin(0.5)
      .setScale(1.5)
      .setInteractive();
  
    return button;
  }