import React, { useState } from "react";
import Form from "../../blocks/form/form.jsx";
import ProductSlider from "../../blocks/product-slider/product-slider.jsx";
import { Wrapper } from "./style";

function BuyPage({ products }) {
  const [selectValue, setSelectValue] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  return products && products.length ? (
    <Wrapper>
      <Form
        products={products}
        selectValues={selectValue}
        setSelectValues={setSelectValue}
        swiperRef={swiperRef}
      />
      <ProductSlider
        products={products}
        selectValues={selectValue}
        onSwiper={setSwiperRef}
      />
    </Wrapper>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default BuyPage;
