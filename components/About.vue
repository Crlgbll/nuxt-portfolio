<template>
  <section class="py-12 mt-10">
    <div class="container">
      <div class="row">
        <!-- Place the div with Card component to the left on all screen sizes -->

        <div class="col-md-6 order-md-1">
          <div
            class="border rounded-3xl shadow-3xl p-4 text-center text-white bg-black"
          >
            <img
              class="w-48 h-48 sm:w-48 sm:h-48 lg:w-96 lg:h-96 mx-auto rounded-3xl bg-[#964B00] shadow-lg shadow-black"
              src="~/assets/images/carlo-formal.png"
              alt="Carlo"
            />
            <h5 class="text-3xl font-medium mt-4">Carlo Gaballo</h5>
            <span class="text-md">Full Stack Developer</span>
            <div class="mt-4 space-y-4">
              <button
                class="w-32 px-4 py-2 text-sm font-medium mx-2 text-center text-white bg-[#964B00] rounded-lg hover:bg-gray-700"
                @click="openContactModal"
              >
                Contact Me
              </button>
              <button
                class="w-32 px-4 py-2 text-sm font-medium text-center mx-2 text-white border-2 border-white rounded-lg hover:bg-blue-800"
                @click="openSocialsModal"
              >
                Socials
              </button>
            </div>
          </div>
        </div>

        <!-- Place the Card component to the right at the "md" breakpoint (768px) -->
        <div class="col-md-6 order-md-2">
          <div class="bg-black text-white p-4 rounded-3xl">
            <h2 class="text-3xl font-semibold mb-4">About Me</h2>
            <p class="leading-relaxed text-xl">
              Hello, My name is Carlo S. Gaballo, and I'm an upbeat, hardworking
              guy from the Philippines' bustling city of Butuan in the province
              of Agusan del Norte. I'm currently pursuing a Bachelor of
              Information Technology degree at Caraga State University, where I
              can indulge my insatiable curiosity about all things
              technological.
            </p>
          </div>
          <Card />
        </div>
      </div>
    </div>
    <ContactModal :isOpen="isContactOpen" @close="closeContactModal" />
    <SocialsModal :isOpen="isSocialsOpen" @close="closeSocialsModal" />
  </section>
</template>

<script>
import useModal from "~/composables/useModal";
import ContactModal from "~/components/Modals/ContactModal.vue";
import SocialsModal from "~/components/Modals/SocialsModal.vue";

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
  components: {
    ContactModal,
    SocialsModal,
  },
  setup() {
    const {
      isContactOpen,
      openContactModal,
      closeContactModal,
      isSocialsOpen,
      openSocialsModal,
      closeSocialsModal,
    } = useModal();

    return {
      isContactOpen,
      openContactModal,
      closeContactModal,
      isSocialsOpen,
      openSocialsModal,
      closeSocialsModal,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles for the About component here */
</style>
