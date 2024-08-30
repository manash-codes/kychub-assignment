import React, { createContext, useState } from "react";

const ProductCompareContext = createContext();

const ProductCompareProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const checkLimit = () => {
    return products.length < 4;
  };

  const isExist = (product) => {
    return products.some((p) => p.id === product.id);
  };

  const addProduct = (product) => {
    if (isExist(product)) {
      return;
    }
    if (checkLimit()) {
      setProducts([...products, product]);
    }
  };

  const removeProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return (
    <ProductCompareContext.Provider
      value={{ products, addProduct, removeProduct }}
    >
      {children}
    </ProductCompareContext.Provider>
  );
};

export { ProductCompareProvider, ProductCompareContext };
