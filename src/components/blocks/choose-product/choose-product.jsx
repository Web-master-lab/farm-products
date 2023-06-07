import React from "react";
import { Heading, CheckboxLabel } from "./style";
import Checkbox from "../../ui/checkbox/checkbox";

function ChooseProduct({ products, selectValues, setSelectValues, swiperRef }) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);

    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
      swiperRef.slideTo(value, 0);
    }
    setSelectValues(newValue);
  };

  return (
    <>
      <Heading>Выберите продукты</Heading>
      {products.map((product) => {
        return (
          <Checkbox
            key={product.index}
            name={product.name}
            value={product.index}
            isChecked={selectValues.includes(product.index)}
            title={product.title}
            onChange={handleChange}
            labelComponent={CheckboxLabel}
          />
        );
      })}
    </>
  );
}

export default ChooseProduct;
