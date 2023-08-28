export default class PlayerSprite extends Phaser.Physics.Arcade.Sprite {
  // private isJumping: boolean;
  // private jumpForce: number;
  private walkSpeed: number;
  private spriteSheet!: string;

  constructor(scene: Phaser.Scene, x: number, y: number, spriteSheet: string) {
    super(scene, x, y, spriteSheet);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.spriteSheet = spriteSheet;

    // Set up animations
    scene.anims.create({
      key: "walk",
      frames: scene.anims.generateFrameNumbers(spriteSheet, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.setCollideWorldBounds(true);
    this.body.setSize(30, 50); // Adjust the collision body size

    // Set player properties
    //   this.isJumping = false;
    //   this.jumpForce = -300;
    this.walkSpeed = 160;
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    // Movement controls
    if (cursors.left.isDown) {
      this.setVelocityX(-this.walkSpeed);
      this.anims.play("walk", true);
      this.flipX = true;
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.walkSpeed);
      this.anims.play("walk", true);
      this.flipX = false;
    } else {
      this.setVelocityX(0);
      this.anims.stop();
      this.setTexture(this.spriteSheet, 0); // Replace with idle frame index
    }

    //   // Jumping
    //   if (cursors.up.isDown && this.body.onFloor()) {
    //     this.setVelocityY(this.jumpForce);
    //     this.isJumping = true;
    //   }

    //   // Update jumping state
    //   if (this.body.onFloor()) {
    //     this.isJumping = false;
    //   }
  }

  collectQuizObject(quizObject: Phaser.Physics.Arcade.Sprite): void {
    // Handle quiz object collection
    quizObject.destroy(); // Remove the quiz object from the scene
    // Add method to start the quiz activity
  }
}
