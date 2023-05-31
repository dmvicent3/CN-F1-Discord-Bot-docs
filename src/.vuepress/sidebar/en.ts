import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Relatório",
      prefix: "relatorio/",
      link: "relatorio/",
      children: "structure",
    }
  ],
});
