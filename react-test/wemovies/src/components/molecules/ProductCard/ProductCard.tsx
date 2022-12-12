import { CardActions, CardContent, CardMedia } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Card, AddToCardButton } from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../../../types";
import { priceFormatter } from "../../../utils/priceFormatter";
import Image from "next/image";
import useCart from "../../../context/useCart";

interface ProductCardProps {
   id: number;
   image: string;
   title: string;
   price: number;
}

export default function ProductCard(product: ProductCardProps) {
   const { id, image, title, price } = product;
   const { handleAddItemToCart, cart } = useCart();
   const [productQty, setProductQty] = useState<number>(0);

   const getProductQty = useCallback(() => {
      const find = cart.find((product: Product) => product.id === id);
      if (find && find.qty) {
         setProductQty(find.qty);
      }
   }, [id, cart]);

   useEffect(() => {
      cart?.length > 0 && getProductQty();
   }, [cart, getProductQty]);

   return (
      <Card>
         <Image src={image} alt={title} width={148} height={188} />
         <CardContent>
            <h4>{title}</h4>
            <p>{priceFormatter(price)}</p>
         </CardContent>
         <CardActions>
            <AddToCardButton
               fullWidth
               onClick={() =>
                  handleAddItemToCart({ image, title, id, price, qty: 0 })
               }
               disabled={productQty >= 1}
            >
               <div className='count'>
                  <AddShoppingCartIcon fontSize='small' />
                  <p>{productQty}</p>
               </div>

               {productQty <= 0 ? "ADICIONAR AO CARRINHO" : "ITEM ADICIONADO"}
            </AddToCardButton>
         </CardActions>
      </Card>
   );
}
