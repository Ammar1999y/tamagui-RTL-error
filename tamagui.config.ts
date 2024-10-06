import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";
import { createAnimations } from "@tamagui/animations-react-native";

const appConfig = createTamagui({
  ...config,
  animations: createAnimations({
    bouncy: {
      type: "spring",
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    lazy: {
      type: "spring",
      damping: 20,
      stiffness: 60,
    },
    quick: {
      type: "spring",
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
  }),
});
export type AppConfig = typeof appConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
