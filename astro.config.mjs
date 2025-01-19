import { defineConfig } from 'astro/config';
import deno from "@deno/astro-adapter";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
integrations: [tailwind(), svelte(), react()],
image: {
    service: {
    entrypoint: 'astro/assets/services/noop'
    }
},
output: 'server',
adapter: deno(),
});
