<template>
  <div class="hamburger">
    <div class="bar" :class="{ active: isMenuOpen }"></div>
    <div class="bar" :class="{ active: isMenuOpen }"></div>
    <div class="bar" :class="{ active: isMenuOpen }"></div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
  },
};
</script>

<style scoped>
.hamburger {
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  position: relative;
}

.bar {
  background-color: #000;
  height: 3px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.bar.active:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: translateY(-15px) rotate(-45deg);
}
</style>
