import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mhwelander.net/',
	integrations: [mdx(), sitemap(),
		cookieconsent({
            // ...
            guiOptions: {
                consentModal: {
                    layout: 'cloud',
                    position: 'bottom center',
                    equalWeightButtons: true,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false,
                },
            },
            // ...
        }),
	],
});
