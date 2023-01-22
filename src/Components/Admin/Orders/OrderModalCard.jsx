import React from "react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const OrderModalCard = ({ product, qty, size }) => {
  // console.log(product, qty);
  const { desc, image, price, strickedoffprice } = product;

  let s = strickedoffprice.split(",").join("");
  let s1 = s.substring(1);
  let discount = +s1 - +price;
  return (
    <div>
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
            <p>You saved ₹{dollarIndianLocale.format(discount)}/-!</p>
          </div>
          <div>
            <img src={image} alt="prod" />
          </div>

          <div className="prod__qty">
            <div>
              size:
              {" " + size + " "}
            </div>
            <div>
              Qty:
              {" " + qty + " "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModalCard;
