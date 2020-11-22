import { CandlesIcon } from "./CandlesIcon";
import { ThiefIcon } from "./ThiefIcon";
import { PinIcon } from "./PinIcon";

export const IconBuilder = (iconName) => {
  const buildIcon = (iconName) => {
    switch (iconName) {
      case "pin":
        return PinIcon;
      case "candles":
        return CandlesIcon;
      case "thief":
        return ThiefIcon;
      default:
        return "";
    }
  };

  return buildIcon(iconName);
};
