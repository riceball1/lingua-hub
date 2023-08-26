import { useEffect } from "react";
import * as Phaser from "phaser";
import Preloader from "@/scenes/Preloader";
import MenuScene from "./MenuScene";
import About from "./About";
import Turkish from "./Turkish";
import Hindi from "./Hindi";

export default function PhaserGame() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      backgroundColor: "#000",
      scale: {
        width: 800,
        height: 800,
        mode: Phaser.Scale.FIT,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: [Preloader, MenuScene, About, Turkish, Hindi],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game" />;
}
