import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   margin: 0.5rem 0;
   div {
      h3 {
         font-size: 0.8rem;
         line-height: 20px;
         color: var(--text);
      }

      h2 {
         font-size: 0.8rem;
         color: var(--grey);
      }
      p {
         font-size: 1rem;
         line-height: 22px;
         margin-top: 0.2rem;
         font-weight: 700;
      }
      &.MuiGrid-root {
         margin: 0;
      }
      &.MuiGrid2-container {
         width: 100%;
         width: 100%;
         margin: 0;
      }
      &.productContainer {
         display: flex;
         justify-content: start;
         align-items: center;
         div.productInfoContainer {
            margin-left: 3rem;
            font-weight: 700;
         }
      }
      &.inputContainer {
         display: flex;
         justify-content: start;
         align-items: center;
         height: 100%;
      }
      &.subTotalContainer {
         display: flex;
         justify-content: start;
         align-items: center;
         height: 100%;
      }

      &.trashContainer {
         display: flex;
         justify-content: start;
         align-items: center;
         height: 100%;
         svg {
            color: var(--blue-light);
         }
      }

      &.mobileContainer {
         display: flex;
         width: 100%;
         height: 100%;
         justify-content: space-between;

         div {
            &.subTotalContainerMobile {
               text-align: right;
               h3 {
                  color: var(--grey);
               }
            }
            &.cartAndPriceContainer {
               display: flex;
               justify-content: center;
               align-items: center;
               svg {
                  color: var(--blue-light);
               }
            }
            &.titleMobileContainer {
               display: flex;
               flex-direction: column;
               justify-content: space-around;
               align-items: flex-start;
            }
         }
      }
   }
`;

export const UpdateCartButton = styled(Button)`
   &.MuiButtonBase-root {
      width: 1.15rem;
      min-width: 0;
      height: 1.15rem;

      text-align: center;
      padding: 0.18rem;
   }

   border-radius: 100%;
   border: 1px solid var(--blue-light);
   padding: 0;
`;

export const StyledTextField = styled(TextField)`
   width: 62px;
   margin: 0 0.5rem;

   div.MuiInputBase-root {
      height: 24px;
      padding: 0;
   }
`;
