<template>
  <nav
    class="container bg-white/0 py-4 sm:py-2 sticky top-0 text-black font-Poppins z-50"
  >
    <div class="r mx-auto flex justify-between items-center">
      <div class="sm:col-span-6">
        <NuxtLink to="/" class="text-3xl font-bold"> CG </NuxtLink>
      </div>
      <!-- Move the menu button to the upper right side -->
      <div class="sm:hidden relative">
        <button
          @click="toggleMenu"
          :class="{ 'hover:scale-105 ': isMenuOpen }"
          class="p-2"
        >
          <Hamburger :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
        </button>
        <div
          v-if="isMenuOpen"
          class="absolute top-14 right-0 mt-2 shadow-md bg-white/0 font-bold rounded-md"
        >
          <!-- Dropdown Menu Content -->
          <div class="py-2 px-4">
            <NuxtLink
              v-for="linkItem in linksData"
              :key="linkItem.id"
              :to="linkItem.path"
              class="menu rounded-box text-2xl block mb-2"
            >
              {{ linkItem.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="hidden sm:col-span-6 sm:flex items-center space-x-4">
        <NuxtLink
          v-for="linkItem in linksData"
          :key="linkItem.id"
          :to="linkItem.path"
          class="menu rounded-box text-l hover:scale-105 hover:font-bold"
        >
          {{ linkItem.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      linksData: [
        { id: 1, path: "#Home", label: "Home" },
        { id: 2, path: "#About", label: "About" },
        { id: 3, path: "#Projects", label: "Portfolio" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
