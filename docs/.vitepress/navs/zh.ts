export default function getNavs() {
  return [
    { text: "主页", link: "/" },
    {
      text: "文档",
      items: [
        {
          text: "个人介绍",
          link: "personal-profile",
          activeMatch: "personal-profile",
        },
      ],
    },
  ];
}
