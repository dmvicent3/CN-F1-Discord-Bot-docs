import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Relatório",
    icon: "creative",
    prefix: "/relatorio/",
    children: [
      {
        text: "Tecnologias e Conceitos",
        icon: "creative",
        prefix: "1. Tecnologias e Conceitos/",
        children: ["1.1. Formula 1", "1.2. Discord", "1.3. Github", "1.4. Amazon Web Services", "1.5. Docker", "1.6. Vuepress", "1.7. Netilify"],
      },
      {
        text: "F1 Discord Chat Bot",
        icon: "config",
        prefix: "2. F1 Discord Chat Bot/",
        children: ["2.1. Funcionalidades", "2.2. Desenvolvimento", "2.3. Implementação" ],
      },
    ],
  }
]);
