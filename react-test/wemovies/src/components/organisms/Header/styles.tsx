import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 74px;
   display: flex;
   margin-top: 1rem;
   max-width: 960px;
   justify-content: space-between;
   align-items: center;
   color: var(--white);
   padding: 18px 10px;

   @media (max-width: 500px) {
      padding: 18px 16px;
      margin-top: 0;

      h1 {
         font-size: 1.4rem;
      }
      h2 {
         display: none;
      }
   }
   a {
      text-decoration: none;
      text-transform: none;
      color: var(--white);
   }
   div {
      &.cartInfoContainer {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 8px;
         text-align: right;
      }
   }
`;
