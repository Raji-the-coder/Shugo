import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useProductContext } from "../context";
import { useTheme } from "./context/ThemeContexts";

const ProductList = () => {
  const { theme } = useTheme();
  const { products } = useProductContext();

  return (
    <div className={theme ? "py-5 bg-slate-900" : "py-5 bg-slate-200"}>
      <div className="container">
        {products.length > 0 ? (
          <>
            <Title className="text-light" name="our" title="products" />
            <div className="row">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-primary">
              <p style={{ color: "red" }}>Sorry, no results found!</p>
            </div>
            <div className="col-10 mx-auto text-center text-title text-primary">
              <p style={{ color: "black" }}>
                Please check the spelling or try searching for something else
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
