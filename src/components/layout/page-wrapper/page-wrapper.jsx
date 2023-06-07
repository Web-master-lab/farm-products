import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import { StyledWrapper } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
