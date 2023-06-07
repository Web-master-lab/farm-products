import React, { useState } from "react";
import { MainWrapper, Price, Tab, Content, TabWrapper, Item } from "./style";

function Tabs({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <>
          {product.description}
          <Price>{product.price}</Price>
        </>
      )
    },
    {
      title: "Характеристики",
      content: product.characteristics.map((characteristic) => {
        return (
          <Item key={characteristic.name}>
            <b>{characteristic.name}</b>
            {characteristic.value}
            <br />
          </Item>
        );
      })
    },
    {
      title: "Свойства",
      content: product.perks.map((perk) => {
        return (
          <Item key={perk.name}>
            <b>{perk.name}</b>
            {perk.value}
            <br />
          </Item>
        );
      })
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <MainWrapper>
      <TabWrapper>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <Tab $isActive key={tab.index}>
                  {tab.title}
                </Tab>
              );
            }
            return (
              <Tab key={tab.index} onClick={() => setActiveTab(index)}>
                {tab.title}
              </Tab>
            );
          })}
      </TabWrapper>
      <Content>{tabs[activeTab].content}</Content>
    </MainWrapper>
  );
}

export default Tabs;
