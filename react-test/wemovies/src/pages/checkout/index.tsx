import React, { useEffect } from "react";
import ContentWrapper from "../../components/atoms/ContentWrapper/ContentWrapper";
import { Container, GetBackButton } from "../../styles/pages/checkout";
import Man from "../../assets/manSvg.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import useCart from "../../context/useCart";

export default function Empty() {
   const { setCart } = useCart();

   const isMobile = useMediaQuery("(max-width:500px)");

   useEffect(() => {
      setCart([]);
   }, [setCart]);

   return (
      <ContentWrapper>
         <Container>
            {!isMobile ? (
               <h1>Compra realizada com sucesso!</h1>
            ) : (
               <h1>
                  Compra realizada <br />
                  com sucesso!
               </h1>
            )}

            <Image src={Man} alt='man' width={448} height={268} />
            <Link href='/'>
               <GetBackButton>VOLTAR</GetBackButton>
            </Link>
         </Container>
      </ContentWrapper>
   );
}
