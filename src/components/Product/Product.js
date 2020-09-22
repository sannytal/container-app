/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import productMicrofrontend from "product-mf-app";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Product.scss";

export default function Product(props) {
  const clickEvent = () => {
    console.log("clicked from product page");
  };
  const containerObj = {
    pageName: "Product",
    getConsoleLog: clickEvent,
  };

  const microFrontendData = productMicrofrontend.register(containerObj);
  const ProductMicroFrontend = microFrontendData.content;

  return (
    <div className="app-product">
      <Header />
      <div className="app-product__mf">
        <ProductMicroFrontend />
      </div>
      <Footer />
    </div>
  );
}
