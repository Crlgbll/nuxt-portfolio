<template>
  <div class="container-fluid bg-white h-full w-full mt-20">
    <section id="Home" class="relative">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="md:col-span-1">
            <div
              class="bg-[#964B00] text-white p-8 rounded-3xl shadow-xl shadow-black"
            >
              <h3
                class="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4"
              >
                <span>CARLO GABALLO<br /></span>
                FULL-STACK DEVELOPER
              </h3>
              <div class="text-xl mt-4 space-y-4">
                <NuxtLink
                  to="#"
                  class="block text-gray-800 font-semibold hover:text-black"
                >
                  View Projects
                </NuxtLink>
                <NuxtLink
                  to="#About"
                  class="block text-gray-800 font-semibold hover:text-black"
                >
                  Read About Me
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="md:col-span-1 flex justify-center">
            <img
              class="w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96 rounded-full md:order-2 order-1 bg-white shadow-xl"
              src="~/assets/images/nonformal-trans.png"
              alt="Carlo Gaballo"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add your custom styles for the Home component here */
</style>
