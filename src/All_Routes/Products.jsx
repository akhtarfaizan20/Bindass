import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../Redux/Products/products.actions";

const Products = () => {
  const { loading, error, products } = useSelector(
    (store) => store.productManager
  );
  const { target } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(target, page));
  }, [page]);

  console.log(products);
  return <div>Products</div>;
};

export default Products;
