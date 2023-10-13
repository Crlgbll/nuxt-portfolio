<template>
<<<<<<< HEAD
  <div class="flex items-center justify-center">
=======
  <div class=" flex items-center justify-center">
>>>>>>> a274116a62501319d6b029b37a0b05cf4bb10209
    <div class="col-12 col-md-8 col-lg-6 col-xl-4">
      <dialog
        ref="SocialsModal"
        class="modal modal-bottom sm:modal-middle w-full bg-black text-center text-white py-4 mx-auto"
      >
        <div class="modal-box bg-gray-700">
          <h3 class="font-bold text-lg">Socials</h3>

          <NuxtLink to="https://www.facebook.com/Karurogaballo">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:facebook"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink to="https://twitter.com/Karurogabs">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:twitter"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/carlogabs/">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:instagram-icon"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink to="https://www.tiktok.com/@carlogbal">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:tiktok-icon"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink
            to="https://www.youtube.com/channel/UCenoEkwIX8VbIqN1hwfjpzw"
          >
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:youtube-icon"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink to="https://github.com/Crlgbll">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:github-icon"></Icon>
            </button>
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/carlo-gaballo-025290296/">
            <button class="h-14 w-14 hover:scale-110 py-6 animate-bounce">
              <Icon name="logos:linkedin-icon"></Icon>
            </button>
          </NuxtLink>

          <div class="modal-action">
            <form method="dialog">
              <button
                class="btn hover:bg-slate-700 rounded-full h-14 w-14"
                @click="closeModal"
              >
                <Icon name="iconoir:cancel"></Icon>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.showModal();
      } else {
        this.closeModal();
      }
    },
  },

  methods: {
    showModal() {
      this.$refs.SocialsModal.showModal();
    },
    closeModal() {
      this.$refs.SocialsModal.close();
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
