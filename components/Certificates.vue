<template>
  <div class="container">
    <div class="h-[500px] w-[800px] border-2 border-black">
      <Swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide>
          <img src="~/assets/images/html.jpg" class="w-full" alt="HTML" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="~/assets/images/css.jpg" class="w-full" alt="CSS" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="~/assets/images/freecode.jpg"
            class="w-full"
            alt="FreeCode"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
