// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/collection/colors.scss" as *;
          @use "~/assets/styles/collection/fonts.scss" as *;
          @use "~/assets/styles/collection/mixins.scss" as *;
        `,
        },
      },
    },
  },

  css: ["~/assets/styles/index.scss"],
});
