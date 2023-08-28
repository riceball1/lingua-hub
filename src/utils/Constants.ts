export enum SceneValues {
  MenuScene = "MenuScene",
  Preloader = "Preloader",
  About = "About",
  Turkish = "Turkish",
  Hindi = "Hindi",
  Russian = "Russian",
  Korean = "Korean",
  Activity = "Activity",
}

export enum ColorValues {
  BlueHexNotion = "#00BFFF",
  BlackHexNotion = "#000",
  WhiteHexNotion = "#FFF",
  Transparent = "transparent",
  WhiteHex = 0xffffff,
  PrimaryColor = 0x045d5d, // dark teal
  SecondaryColor = 0xeaaa00, // mustard yellow
  SecondaryHexColor = "#EAAA00", // mustard yellow
}

export const DefaultButtonConfigurations = {
  scale: 1,
  buttonBackgroundColor: Number(ColorValues.PrimaryColor),
  buttonTextColor: String(ColorValues.WhiteHexNotion),
  hasHoverBackgroundColor: false,
};
