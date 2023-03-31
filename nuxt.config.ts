// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config:any) => config.plugins.push(vuetify()))
    }
  ],
  imports: {
    dirs: ['./stores'],
  },
  nitro: {
    imports: {
      dirs: ['./controllers'],
    },
  },
  pinia: {
    autoImports: ['defineStore', 'mapStores'],
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    },
    preconnect: true,
    prefetch: true,
    preload: true
  },
  typescript: {shim:false},
  build: {transpile:['vuetify']},
  vite: { 
    ssr: { noExternal: ['vuetify']},
    // test: {
    //   globals: true,
    //   environment: 'jsdom',
    // },
  }
})
