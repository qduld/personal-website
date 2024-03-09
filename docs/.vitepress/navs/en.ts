export default function getNavs() {
  return [
    { text: "Home", link: "en/index" },
    {
      text: "Document",
      items: [
        {
          text: "Personal Profile",
          link: "en/personal-profile",
          activeMatch: "en/personal-profile",
        },
      ],
    },
  ];
}
