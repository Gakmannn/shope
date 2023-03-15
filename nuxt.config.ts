// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => config.plugins.push(vuetify()))
    }
  ],
  // typescript: {shim:false},
  build: {transpile:['vuetify']},
  vite: { ssr: { noExternal: ['vuetify']}}
})
