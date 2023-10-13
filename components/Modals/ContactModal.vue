<template>
  <dialog
    ref="ContactModal"
    class="modal modal-bottom sm:modal-middle bg-black text-center text-white py-4 mx-automodal w-full"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">Contact Infromation</h3>
      <p class="font-bold text-lg text-start">
        <Icon name="ic:baseline-local-phone"></Icon> : +639301355570
      </p>
      <p class="font-bold text-lg text-start">
        <Icon name="logos:google-gmail"></Icon> : carlogaballo@gmail.com
      </p>

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
      this.$refs.ContactModal.showModal();
    },
    closeModal() {
      this.$refs.ContactModal.close();
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the modal here */
</style>
