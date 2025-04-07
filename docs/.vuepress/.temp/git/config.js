import { GitContributors } from "F:/myWork/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b4994b396b375124e446973cad2ea3ac/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "F:/myWork/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b4994b396b375124e446973cad2ea3ac/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
