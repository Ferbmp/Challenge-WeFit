import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: start;
   padding: 1.2rem;

   @media (max-width: 500px) {
      min-height: 84vh;
   }

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
      &.MuiGrid2-container {
         width: 100%;
         width: 100%;
         margin: 0;
      }
      &.MuiGrid2-root {
         &:first-child {
            padding-left: 0;
         }
      }
      &.totalContainer {
         width: 100%;
         display: flex;
         border-top: 1px solid var(--grey);
         padding: 2rem 0;
         margin-top: 1rem;
         justify-content: space-between;
         align-items: center;
         a {
            color: var(--white);
         }

         div.totalInfo {
            display: flex;
            justify-content: center;
            align-items: center;

            h1 {
               font-weight: 700;
               font-size: 1.5rem;
               color: var(--text);
               margin-left: 2.4rem;
               margin-right: 1rem;
            }
         }
         @media (max-width: 500px) {
            flex-direction: column-reverse;
            margin-top: auto;
            button {
               width: 100%;
            }
            div.totalInfo {
               margin-bottom: 1rem;
            }
         }
      }
   }
`;

export const CheckoutButton = styled(Button)`
   &.MuiButtonBase-root {
      width: 236px;
      height: 40px;
      border-radius: 4px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      color: var(--white);
      background-color: var(--blue-light);
   }
`;
