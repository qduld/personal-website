import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import getNavs from "../navs/en";
import { sidebar } from "../sidebars/en";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: getNavs(),
    sidebar,
  },
};
