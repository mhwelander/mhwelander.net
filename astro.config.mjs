import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import customToc from "astro-custom-toc";

const tocTemplate = (html) => {
  return `
<aside class="toc">
  <nav>
      ${html}
  </nav>
</aside>`.trim();
};

// https://astro.build/config
export default defineConfig({
  site: 'https://mhwelander.net/',
  integrations: [customToc(
    {
      template: tocTemplate,
      maxDepth: 3
    }
  ), mdx(), sitemap()]
});

