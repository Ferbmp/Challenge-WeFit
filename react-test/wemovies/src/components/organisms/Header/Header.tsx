import React from "react";
import { Container } from "./styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Link from "next/link";
import useCart from "../../../context/useCart";

export default function Header() {
   const { cart } = useCart();

   return (
      <Container>
         <Link href='/'>
            <h1>WeMovies</h1>
         </Link>
         <Link href='/cart'>
            <div className='cartInfoContainer'>
               <div className='info'>
                  <h2>Meu carrinho</h2>
                  <p>{cart?.length || 0} items</p>
               </div>

               <ShoppingBasketIcon fontSize='large' />
            </div>
         </Link>
      </Container>
   );
}
