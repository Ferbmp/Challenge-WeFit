import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 536px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--text);
   }
   img {
      margin: 2rem 0;
   }

   @media (max-width: 500px) {
      img {
         width: 100%;
      }
   }
`;

export const GetBackButton = styled(Button)`
   width: 180px;
   border-radius: 4px;
   height: 40px;
   font-weight: 700;
   color: var(--white);
   background-color: var(--blue-light);

   &:hover {
      background-color: var(--blue-light);
   }
`;
