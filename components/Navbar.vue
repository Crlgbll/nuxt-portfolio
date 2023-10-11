<template>
  <nav class="h-14 py-2 w-full sticky top-0 flex justify-between z-50">
    <div class="col-sm-6">
      <NuxtLink to="/" class="flex font-bold text-3xl">
        <span class="text-purple-700">C</span
        ><span class="text-red-700">G</span>
      </NuxtLink>
    </div>
    <div class="flex items-center relative">
      <button
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
        class="rounded-full h-12 w-12 right-0 absolute hover:scale-105 hover:text-blue-700 flex justify-center items-center z-50"
      >
        <span
          class="w-8 h-1 bg-black absolute left-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-px transition-transform duration-300"
          :class="{ 'rotate-45': isMenuOpen }"
        ></span>
        <span
          class="w-8 h-1 bg-black absolute left-1/2 bottom-1/2 transform -translate-x-1/2 transition-opacity duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span
          class="w-8 h-1 bg-black absolute left-1/2 bottom-1/2 transform -translate-x-1/2 transition-transform duration-300"
          :class="{ '-rotate-45': isMenuOpen }"
        ></span>
        <span
          class="w-8 h-1 bg-black absolute left-1/2 bottom-1/2 transform -translate-x-1/2 transition-transform duration-300"
          :class="{ '-rotate-180': isMenuOpen }"
        ></span>
      </button>
      <!-- Dropdown Menu -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="dropdown-menu \">
          <!-- Menu Items -->
          <NuxtLink
            v-for="linkItem in linksData"
            :key="linkItem.id"
            :to="linkItem.path"
            class="menu-item hover:font-bold flex sm:inline-flex text-lg"
            @click="toggleMenu"
          >
            {{ linkItem.label }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false,
      linksData: [
        { id: 1, path: "/", label: "Home" },
        { id: 2, path: "~/About", label: "About" },
        { id: 3, path: "/", label: "Stacks" },
        { id: 4, path: "/", label: "Portfolio" },
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

<style scoped>
.dropdown-menu {
  height: 200px;
  width: 110px;
  position: absolute;
  top: calc(100%);
  transform: translateX(-100%);
  z-index: 1000;
  padding: 10px;
  border-radius: 5px;
}

button.active + .dropdown-menu {
  display: block;
}

.menu-item {
  margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
