import React, { useState } from "react";
import Button from "../../ui/button/button";
import { Address, Text, Heading, Price } from "./style";

function Order({ products, selectValues }) {
  let totalPrice = 0;
  const [addressState, setAddressState] = useState("");
  let titlesArray = [];

  selectValues.forEach((value) => {
    totalPrice += products[value].clearPrice;
    titlesArray.push(products[value].title);
  });

  const productsList = titlesArray.join(", ");

  return (
    <>
      <Heading>Сделать заказ</Heading>
      <Address
        type="text"
        placeholder="Введите адрес доставки"
        value={addressState}
        onChange={(evt) => {
          setAddressState(evt.target.value);
        }}
      />
      <Text>Цена</Text>
      <Price>{totalPrice} руб.</Price>
      <Button
        disabled={!(selectValues.length && addressState)}
        onClick={() => {
          alert(`Спасибо за покупку! 
            Вы заказали: ${productsList}. 
            На адрес - ${addressState}
            Сумма заказа - ${totalPrice}
            `);
        }}
      >
        Купить
      </Button>
    </>
  );
}

export default Order;
