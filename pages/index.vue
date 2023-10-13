<template>
  <div class="container-fluid bg-white h-full w-full font-Poppins">
    <Navbar />
    <section id="Home">
      <Home />
    </section>
    <svg
      class="w-full relative"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        fill="#000000"
        fill-opacity="1"
        d="M0,32L360,224L720,96L1080,128L1440,96L1440,320L1080,320L720,320L360,320L0,320Z"
      ></path>
    </svg>

    <section id="Certificates" class="h-[80vh]">
      <Certificates />
    </section>
    <svg
      class="w-full relative mt-56"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#a52a2a"
        fill-opacity="1"
        d="M0,64L480,64L960,256L1440,128L1440,320L960,320L480,320L0,320Z"
      ></path>
    </svg>
    <section id="About" class="h-[130vh] mt-12">
      <h1
        class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-5 md:mt-10 text-[#964B00] text-center"
      >
        ABOUT
      </h1>
      <About />
    </section>
  </div>
</template>
