import { CodeTabs } from "F:/myWork/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aac13d8226e161d49e987642445677aa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/myWork/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aac13d8226e161d49e987642445677aa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/myWork/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aac13d8226e161d49e987642445677aa/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
