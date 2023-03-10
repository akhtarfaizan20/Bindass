import React, { useState } from "react";
import "./product.css";
// import Size from './size'
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const Product = (props) => {
  const { desc, image, price, strickedoffprice } = props.product;
  const { handleRemove, id, qty, handleQtyChange, size } = props;
  let s = strickedoffprice.split(",").join("");
  let s1 = s.substring(1);
  let discount = +s1 - +price;

  return (
    <div className="main__prod__container">
      <div className="prod__desc">
        <div>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              webkitLineClamp: "1" /* number of lines to show */,
              lineClamp: "1",
              webkitBoxOrient: "vertical",
            }}
          >
            {desc}
          </p>
          <div className="inline">
            <h1>₹{dollarIndianLocale.format(price)}/-</h1>
            <p>
              <s>{strickedoffprice}/-</s>
            </p>
          </div>
          <p>You saved ₹{dollarIndianLocale.format(discount)}/-</p>
        </div>
        <div>
          <img src={image} alt="prod" />
        </div>

        <div className="prod__qty">
          <div>
            size:
            <select
              value={size}
              onChange={(e) => handleQtyChange({ id, size: e.target.value })}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
            </select>
          </div>
          <div>
            Qty:
            <select
              value={qty}
              onChange={(e) => handleQtyChange({ id, qty: e.target.value })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </div>
      <div className="move__remove">
        <button onClick={() => handleRemove(id)}>Remove</button>
        <button>Move to Wishlist</button>
      </div>
    </div>
  );
};

export default Product;
