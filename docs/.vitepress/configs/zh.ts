import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import getNavs from "../navs/zh";
import { sidebar } from "../sidebars/zh";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: getNavs(),
    sidebar,
  },
};
