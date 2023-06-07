import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import SwiperCore, { FreeMode, Mousewheel, Scrollbar } from "swiper";
import { Image, StyledSlide, StyledSwiper } from "./style";
import Title, { TitleLevel, TitleSize } from "../../ui/title/title";
import Tabs from "../../ui/tabs/tabs";

function ProductSlider({ products, onSwiper }) {
  SwiperCore.use([FreeMode, Mousewheel, Scrollbar]);
  return (
    <StyledSwiper
      onSwiper={onSwiper}
      slidesPerView={2.46}
      spaceBetween={12}
      direction="vertical"
      mousewheel={{ sensitivity: 0.7 }}
      freeMode
      scrollbar={{
        draggable: true,
        dragSize: 288
      }}
    >
      {products &&
        products.length &&
        products.map((product) => (
          <SwiperSlide key={product.index}>
            <StyledSlide>
              <Image src={product.image} />
              <Title size={TitleSize.EXTRA_SMALL} level={TitleLevel.H3}>
                {product.title}
              </Title>
              <Tabs product={product} />
            </StyledSlide>
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
}

export default ProductSlider;
