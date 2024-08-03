import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { useProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Store = ({ history }) => {
  const value = useProductConsumer();
  const { cart } = value;

  return (
    <section>
      {cart.length > 0 ? (
        <React.Fragment>
          <div className="h-full">
            <Title name="your" title="cart" />
            <CartColumns />
            <CartList value={value} />
            <CartTotals value={value} history={history} />
          </div>
        </React.Fragment>
      ) : (
        <div className="h-full">
          <EmptyCart />
        </div>
      )}
    </section>
  );
};

export default Store;
