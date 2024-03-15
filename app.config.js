//import withBackgroundService from "./plugin-with-service";

export default {
  expo: {
    name: "backround-test",
    slug: "backround-test",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "app.alex.backgroundtest",
    },
    android: {
      permissions: ["FOREGROUND_SERVICE", "WAKE_LOCK"],
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.alex_demchuk.backroundtest",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d67ab568-240a-4c26-96bc-7e0e4fac2d87",
      },
    },
    owner: "alex_ratibor",
    plugins: [
      // Other plugins can be listed here
      //withBackgroundService, // Include your custom plugin here
      //"react-native-background-fetch"
    ],
  },
};
