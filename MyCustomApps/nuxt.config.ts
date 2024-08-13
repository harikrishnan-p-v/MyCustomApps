// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["flowbite/dist/flowbite.min.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js",
          defer: true,
        },
      ],
    },
  },
});
