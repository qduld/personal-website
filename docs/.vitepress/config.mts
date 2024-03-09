import { defineConfig } from "vitepress";
import { themeConfig } from "./theme";
import { zhConfig } from "./configs/zh";
import { enConfig } from "./configs/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Franklin's Zoom",
  description: "A space for personal free play",
  themeConfig,
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      link: "/",
      ...zhConfig,
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en",
      ...enConfig,
    },
  },
});
