import type { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
  i18nRouting: true,
  socialLinks: [{ icon: "github", link: "https://github.com/qduld" }],
  search: {
    provider: "local",
    options: {
      locales: {
        zh: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
        en: {
          translations: {
            button: {
              buttonText: "Search Documents",
              buttonAriaLabel: "Search for documents",
            },
            modal: {
              noResultsText: "Unable to find relevant results",
              resetButtonTitle: "Clear the query criteria",
              footer: {
                selectText: "Select",
                navigateText: "Toggle",
              },
            },
          },
        },
      },
    },
  },
};
