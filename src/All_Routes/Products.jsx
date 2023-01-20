import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../Redux/Products/products.actions";
import styles from "./Products.module.css";
import ProductDiv from "../Components/Products/ProductDiv";
import { Button } from "@chakra-ui/react";
import Filter from "../Components/Products/Filter";


const Products = () => {
  const { loading, error, products } = useSelector(
    (store) => store.productManager
  );
  const { target } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
    const limit=12;
  console.log(target)

  useEffect(() => {
    dispatch(getProducts({target, page,limit}));
  }, [page,target]);

  let name;

  if (target==="men" ? name="Men" : name="Women")
 // console.log(name)
//console.log(products)
  return (
    <div className={styles.productSection}>
      <div className={styles.proTop}>
        <p> Home  /{"  "}</p>
      
        <p>{" "} {name} {" "} Clothing</p>
      </div>

      <div className={styles.proMid}>
        <div className={styles.proHeading}>
            <h1>{name}{"  "} Clothing  </h1>
        </div>
        <div className={styles.proBody}>
            <div className={styles.proFilter}>
              <div className={styles.filterHead}>
                <h1>FILTERS</h1>
              </div >
              <div className={styles.filterBody}>
                   <Filter />
              </div>

            </div>
            <div className={styles.proMainSec}>

              <div className={styles.proSortSec}>
                <div style={{display:"flex", flexDirection:"row-reverse" , gap:"2rem"}}>
                <select style={{border:"1px outline gray", borderRadius:"5px"}}>
                  <option></option>
                  <option>Price : High To Low</option>
                  <option>Price : Low to High</option>
                  <option>Popular</option>
                  <option>New</option>
                </select>
                <h1 style={{fontSize:'16px'}}>Sort By</h1>
                </div>
              </div>
              
              <div className={styles.productMain}>
                {
                  products.map((e)=>(
                    <ProductDiv data={e} />
                  ))
                }
              </div>
              <div style={{margin:"auto" , gap:"2rem" , padding:"2rem"}} >
                <Button  colorScheme='teal' variant='outline' size='md' >Pre</Button>
                <Button  colorScheme='teal' variant='outline' disabled="true" size='md'>{page}</Button>
                <Button  colorScheme='teal' variant='outline' size='md'>Next</Button>
              </div>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Products;
