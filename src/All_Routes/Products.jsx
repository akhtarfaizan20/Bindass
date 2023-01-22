import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getProducts,
  getTotalProducts,
} from "../Redux/Products/products.actions";
import styles from "./Products.module.css";
import ProductDiv from "../Components/Products/ProductDiv";
import { Button, Flex, Select, Spinner } from "@chakra-ui/react";
import Filter from "../Components/Products/Filter";
import Pagination from "../Components/Products/Pagination";

const Products = () => {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [selectSort, setSelectSort] = useState("-");

  const { loading, error, products } = useSelector(
    (store) => store.productManager
  );
  function handleClick(val) {
    setPage(val);
  }
  const { target } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const limit = 12;
  let totalPages = 9;
  //console.log(target);

  useEffect(() => {
    dispatch(getProducts({ target, page, limit, sort, order }));
  }, [page, target, sort, order]);

  let name;

  target === "men" ? (name = "Men") : (name = "Women");
  // console.log(name)
  //console.log(products)

  return (
    <div className={styles.productSection}>
      <div className={styles.proTop}>
        <p> Home /{"  "}</p>

        <p> {name} Clothing</p>
      </div>

      <div className={styles.proMid}>
        <div className={styles.proHeading}>
          <h1>
            {name}
            {"  "} Clothing{" "}
          </h1>
        </div>
        <div className={styles.proBody}>
          <div className={styles.proFilter}>
            <div className={styles.filterHead}>
              <h1>FILTERS</h1>
            </div>
            <div className={styles.filterBody}>
              <Filter />
            </div>
          </div>
          <div className={styles.proMainSec}>
            <div className={styles.proSortSec}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: "2rem",
                }}
              >
                <Select
                  size="md"
                  variant="flushed"
                  w={"200px"}
                  onChange={(e) => {
                    let arr = e.target.value.split("-");
                    setSort(arr[0]);
                    setOrder(arr[1]);
                    setSelectSort(e.target.value);
                  }}
                >
                  <option value="-">Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="ratings-asc">Rating: Low to High</option>
                  <option value="ratings-desc">Rating: High to low</option>
                </Select>
                <h1 style={{ fontSize: "16px", padding: ".5rem" }}>Sort By</h1>
              </div>
            </div>

            <div className={styles.productMain}>
              {loading ? (
                <Flex justifyContent={"center"} p={"50px"}>
                  <Spinner textAlign={"center"} />
                </Flex>
              ) : (
                products.map((e) => (
                  <ProductDiv key={e.id} data={e} />
                  // <ProductDiv data={e} ></ProductDiv>
                ))
              )}
            </div>
            <div style={{ margin: "auto", gap: "2rem", padding: "2rem" }}>
              <Pagination
                page={page}
                totalPages={totalPages}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
