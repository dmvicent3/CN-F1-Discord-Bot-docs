import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "F1 Discord Bot",
      description: "Relatório do F1 Discord Bot",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
