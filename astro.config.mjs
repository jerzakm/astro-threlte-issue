import { defineConfig } from 'astro/config';
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({
    preprocess: seqPreprocessor([preprocess(), preprocessThrelte()])
  })],
  vite:{
    ssr: {
      noExternal: ['three']
    }
  }
});