<template>
  <div class="container mt-10">
    <div class="row">
      <div class="col-sm-6 col-md-3 col-lg-3 mb-4">
        <div
          class="relative w-full sm:w-72 md:w-[400px] lg:w-[400px] p-6 rounded-3xl cursor-pointer hover:scale-105 transform transition-transform duration-300"
        >
          <div class="text-white text-center">
            <p class="text-xl font-bold">TECHNOLOGY STACK</p>
          </div>
          <div
            v-for="(iconName, index) in iconNames"
            :key="index"
            class="ml-3 my-3 inline-block animate-bounce items-center"
          >
            <icon :name="iconName"></icon>
          </div>
          <div
            class="absolute inset-0 z-[-1] rounded-lg"
            style="background-color: #964b00"
          ></div>
        </div>
      </div>

      <!-- Repeat this card block for other columns -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularCard",
  data() {
    return {
      iconNames: [
        "logos:html-5",
        "logos:css-3",
        "logos:javascript",
        "logos:typescript-icon",
        "logos:vue",
        "logos:nuxt-icon",
        "logos:vitejs",
        "logos:postgresql",
        "logos:mysql",
        "logos:nodejs-icon-alt",
        "logos:npm-icon",
        "logos:tailwindcss-icon",
        "logos:bootstrap",
        "logos:vuetifyjs",
        "logos:nodemon",
        "logos:strapi-icon",
        "logos:github-icon",
        "logos:git-icon",
        "logos:visual-studio-code",
        "logos:figma",
      ],
    };
  },
};
</script>
