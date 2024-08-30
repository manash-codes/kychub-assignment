import React, { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ProductCompareContext } from "../context/ProductCompareContext";
import ModalComponent from "./Modal";

const ProductCompare = () => {
  const { products, removeProduct } = useContext(ProductCompareContext);

  if (products.length === 0) {
    return (
      <div className="text-center text-xl m-8">
        Please Add Products to Compare..
      </div>
    );
  }

  return (
    <div className="flex">
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="p-2 my-2 relative w-1/4 border border-gray-800" key={i}>
          {products[i] ? (
            <>
              <img
                src={products[i].images[0]}
                alt="product"
                width="200"
                height="200"
              />
              <p>{products[i].title}</p>
              <p>{products[i].brand}</p>
              <p>{products[i].price}</p>
              <p>
                {Array.from({ length: products[i].rating }).map((_, j) => (
                  <span key={j} className="text-yellow-500">
                    &#9733;
                  </span>
                ))}
              </p>
              <p>{products[i].category}</p>
              <button
                onClick={() => removeProduct(products[i])}
                className="text-2xl p-2 hover:text-blue-300 absolute top-0 right-0"
              >
                <TiDeleteOutline />
              </button>
            </>
          ) : (
            <ModalComponent />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCompare;
