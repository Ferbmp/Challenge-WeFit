import React from "react";
import ContentWrapper from "../../components/atoms/ContentWrapper/ContentWrapper";
import { Container, GetBackButton } from "../../styles/pages/empty";
import Woman from "../../assets/womanSvg.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

export default function Empty() {
   const isMobile = useMediaQuery("(max-width:500px)");

   return (
      <ContentWrapper>
         <Container>
            {!isMobile ? (
               <h1>Parece que não há nada por aqui :(</h1>
            ) : (
               <h1>
                  Parece que não <br /> há nada por aqui :(
               </h1>
            )}
            <div className='imageContainer'>
               <Image src={Woman} alt='woman' width={448} height={268} />
            </div>
            <div className='buttonContainer'>
               <Link href='/'>
                  <GetBackButton>VOLTAR</GetBackButton>
               </Link>
            </div>
         </Container>
      </ContentWrapper>
   );
}
