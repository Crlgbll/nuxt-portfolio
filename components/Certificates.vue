<template>
  <div class="container">
    <h1
      class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold m-4 md:m-5 lg:m-7 text-[#964B00] text-center"
    >
      CERTIFICATES
    </h1>

    <div class="border-2 border-black">
      <Swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 100,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide>
          <img
            src="~/assets/images/html.jpg"
            class="h-[500px] w-full md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto"
            alt="HTML"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="~/assets/images/css.jpg"
            class="h-[500px] w-full md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto"
            alt="CSS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="~/assets/images/freecode.jpg"
            class="h-[500px] w-full md:w-5/4 lg:w-1/2 xl:w-2/3 mx-auto"
            alt="FreeCode"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
