import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "../../mocks/products";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageWrapper products={products} />}>
            <Route index element={<MainPage products={products} />} />
            <Route path="order" element={<BuyPage products={products} />} />
          </Route>
          <Route
            path="*"
            element={<h1>Ошибка 404. Страница не существует.</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
