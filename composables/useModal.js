// useModal.js
import { ref } from "vue";

export default function useModal() {
  const isContactOpen = ref(false);
  const isSocialsOpen = ref(false);

  const openContactModal = () => {
    isContactOpen.value = true;
  };
  const closeContactModal = () => {
    isContactOpen.value = false;
  };

  const openSocialsModal = () => {
    isSocialsOpen.value = true;
  };
  const closeSocialsModal = () => {
    isSocialsOpen.value = false;
  };
  return {
    isContactOpen,
    openContactModal,
    closeContactModal,
    isSocialsOpen,
    openSocialsModal,
    closeSocialsModal,
  };
}
