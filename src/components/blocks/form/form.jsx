import React from "react";
import { StyledFieldset, StyledForm } from "./style";
import Order from "../order/order.jsx";
import ChooseProduct from "../choose-product/choose-product";

function Form({ products, selectValues, setSelectValues, swiperRef }) {
  return (
    <StyledForm>
      <StyledFieldset>
        <ChooseProduct
          products={products}
          selectValues={selectValues}
          setSelectValues={setSelectValues}
          swiperRef={swiperRef}
        />
      </StyledFieldset>
      <StyledFieldset>
        <Order products={products} selectValues={selectValues} />
      </StyledFieldset>
    </StyledForm>
  );
}

export default Form;
