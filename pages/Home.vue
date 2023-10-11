<template>
  <div class="h-screen w-full">
    <div class="container py-4">
      <div class="py-4 p-lg-4">
        <div
          class="flex flex-col-reverse md:flex-row justify-between items-center space-y-8 md:space-y-0"
        >
          <div class="md:w-1/2 md:pl-8">
            <div class="max-w-lg bg-black text-white p-8 rounded-lg shadow-lg">
              <h3
                class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                ref="typeItTextH3"
              >
                <span>Hello, I am <br /></span>
                Carlo Gaballo
              </h3>

              <div class="mt-4 flex items-center space-x-4">
                <NuxtLink
                  to="#"
                  class="relative text-white group overflow-hidden"
                >
                  <span
                    class="link-text transition duration-500 ease-in-out transform origin-left group-hover:translate-x-full"
                  >
                    View Projects
                  </span>
                  <span
                    class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-500 ease-in-out origin-left transform group-hover:translate-x-full"
                  ></span>
                </NuxtLink>
                <span>or</span>
                <NuxtLink
                  to="#"
                  class="relative text-white group overflow-hidden"
                >
                  <span
                    class="link-text transition duration-500 ease-in-out transform origin-left group-hover:translate-x-full"
                  >
                    Read About Me
                  </span>
                  <span
                    class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-500 ease-in-out origin-left transform group-hover:translate-x-full"
                  ></span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 flex justify-center">
            <img
              class="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full shadow-black/60 shadow-xl"
              src="~/assets/images/nonformal-trans.png"
              alt="Carlo Gaballo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";

export default {
  data() {
    return {
      showp: false,
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.typeInH3();
    },
    typeInH3() {
      new TypeIt(this.$refs.typeItTextH3, {
        speed: 50,
        afterComplete: (instance) => {
          instance.destroy();
          this.showp = true;
          this.typeInp();
        },
      }).go();
    },
    typeInp() {
      new TypeIt(this.$refs.typeItTextP, {
        speed: 50,
        afterComplete: (instance) => {
          instance.destroy();
          setTimeout(() => {
            this.showp = false;
            this.startTyping(); // Restart the typing loop
          }, 500);
        },
      }).go();
    },
  },
};
</script>
