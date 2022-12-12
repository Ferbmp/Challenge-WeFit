import React, { useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import ContentWrapper from "../../components/atoms/ContentWrapper/ContentWrapper";
import { Container, CheckoutButton } from "../../styles/pages/cart";
import { Product } from "../../types";

import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import ProductCartCard from "../../components/molecules/ProductCartCard/ProductCartCard";
import useCart from "../../context/useCart";

export default function Cart() {
   const router = useRouter();
   const isMobile = useMediaQuery("(max-width:500px)");

   const {
      cart,
      totalPrice,
      handleAddItemToCart,
      handleRemoveItemFromCart,
      handleRemoveOneItemOfCart,
   } = useCart();

   useEffect(() => {
      if (cart.length === 0) router.push("/empty");
   }, [cart.length, router]);

   return (
      <ContentWrapper>
         <Container>
            {!isMobile && (
               <Grid container spacing={4}>
                  <Grid xs={5}>
                     <h2>PRODUTO</h2>
                  </Grid>
                  <Grid xs={2}>
                     <h2>QTD</h2>
                  </Grid>
                  <Grid xs={5}>
                     <h2>SUBTOTAL</h2>
                  </Grid>
               </Grid>
            )}

            {cart?.map((product: Product, index: number) => (
               <ProductCartCard
                  key={index}
                  product={product}
                  isMobile={isMobile}
                  handleRemoveItem={handleRemoveOneItemOfCart}
                  handleAddItem={handleAddItemToCart}
                  handleDeleteItem={handleRemoveItemFromCart}
               />
            ))}

            <div className='totalContainer'>
               <Link href='/checkout'>
                  <CheckoutButton>FINALIZAR PEDIDO</CheckoutButton>
               </Link>

               <div className='totalInfo'>
                  <h2>TOTAL</h2>
                  <h1>{totalPrice}</h1>
               </div>
            </div>
         </Container>
      </ContentWrapper>
   );
}
