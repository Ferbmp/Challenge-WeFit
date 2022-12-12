import { Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Product } from "../../../types";
import { priceFormatter } from "../../../utils/priceFormatter";
import { UpdateCartButton, StyledTextField, Container } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductCartCardProps {
   product: Product;
   handleRemoveItem: (item: Product) => void;
   handleAddItem: (item: Product) => void;
   handleDeleteItem: (item: Product) => void;
   isMobile: boolean;
}

export default function ProductCartCard({
   product,
   handleRemoveItem,
   handleAddItem,
   handleDeleteItem,
   isMobile,
}: ProductCartCardProps) {
   return (
      <Container>
         {!isMobile ? (
            <Grid container spacing={4}>
               <Grid xs={5}>
                  <div className='productContainer'>
                     <div className='image'>
                        <Image
                           src={product.image}
                           alt={product.title}
                           width={96}
                           height={124}
                        />
                     </div>

                     <div className='productInfoContainer'>
                        <h3>{product.title}</h3>
                        <p>{priceFormatter(product.price)}</p>
                     </div>
                  </div>
               </Grid>
               <Grid xs={2}>
                  <div className='inputContainer'>
                     <UpdateCartButton
                        onClick={() => handleRemoveItem(product)}
                     >
                        -
                     </UpdateCartButton>

                     <StyledTextField
                        id='outlined-basic'
                        variant='outlined'
                        value={product.qty}
                     />
                     <UpdateCartButton onClick={() => handleAddItem(product)}>
                        +
                     </UpdateCartButton>
                  </div>
               </Grid>
               <Grid xs={4}>
                  <div className='subTotalContainer'>
                     <p>{priceFormatter(product.qty * product.price)}</p>
                  </div>
               </Grid>
               <Grid xs={1}>
                  <div className='trashContainer'>
                     <IconButton
                        aria-label='delete'
                        onClick={() => handleDeleteItem(product)}
                     >
                        <DeleteIcon fontSize='large' />
                     </IconButton>
                  </div>
               </Grid>
            </Grid>
         ) : (
            <div className='mobileContainer'>
               <Image
                  src={product.image}
                  alt={product.title}
                  width={68}
                  height={84}
               />
               <div className='titleMobileContainer'>
                  <h3>{product.title}</h3>
                  <div>
                     <UpdateCartButton
                        onClick={() => handleRemoveItem(product)}
                     >
                        -
                     </UpdateCartButton>

                     <StyledTextField
                        id='outlined-basic'
                        variant='outlined'
                        value={product.qty}
                     />
                     <UpdateCartButton onClick={() => handleAddItem(product)}>
                        +
                     </UpdateCartButton>
                  </div>
               </div>
               <div className='priceInfoContainer'>
                  <div className='cartAndPriceContainer'>
                     <p>{priceFormatter(product.price)}</p>
                     <IconButton
                        aria-label='delete'
                        onClick={() => handleDeleteItem(product)}
                     >
                        <DeleteIcon fontSize='medium' />
                     </IconButton>
                  </div>
                  <div className='subTotalContainerMobile'>
                     <h3>SUBTOTAL</h3>
                     <p>{priceFormatter(product.qty * product.price)}</p>
                  </div>
               </div>
            </div>
         )}
      </Container>
   );
}
