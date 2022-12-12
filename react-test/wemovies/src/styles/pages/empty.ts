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
      margin-bottom: 1.5rem;
   }
   div.imageContainer {
      border-bottom: 1px solid #3f3d56;
      margin-bottom: 2rem;

      @media (max-width: 500px) {
         border-bottom: 0;
         margin-bottom: 0;
         img {
            width: 100%;
         }
      }
   }

   div.buttonContainer {
      @media (max-width: 500px) {
         border-top: 1px solid #3f3d56;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         padding-top: 1.5rem;
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
