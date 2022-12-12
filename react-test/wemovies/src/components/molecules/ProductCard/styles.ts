import { Button, Card as MuiCard } from "@mui/material";
import styled from "styled-components";

export const Card = styled(MuiCard)`
   width: 100%;
   max-width: 312px;
   background-color: var(--white);
   padding: 10px 11px;
   justify-content: center;
   align-items: center;
   display: flex;
   flex-direction: column;
   text-align: center;

   @media (max-width: 500px) {
      max-width: 90%;
      height: 312px;
      div.MuiCardContent-root {
         margin: 0.5rem 0;
         h4 {
            margin: 0.2rem 0;
         }
      }
   }

   img {
      object-fit: contain;
      width: 147px;
      height: 188px;
   }
   h4 {
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1rem;
      margin-top: 0.3rem;
   }
   p {
      font-weight: 700;
      line-height: 1.8rem;
   }

   div {
      &.MuiCardContent-root {
         padding: 0;
      }
      &.MuiCardActions-root {
         padding: 0;
         width: 100%;
      }
   }
`;

interface AddToCardButtonProps {
   disabled?: boolean;
}

export const AddToCardButton = styled(Button)<AddToCardButtonProps>`
   &.MuiButton-root {
      background-color: ${({ disabled }) =>
         !disabled ? "var(--blue-light)" : "var(--green)"};
      color: #fff;
      font-weight: 700;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      padding: 8px;
      border: 4px;
      &:hover {
         background-color: var(--blue-light);
      }
   }
   div.count {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      p {
         font-weight: normal;
      }
   }
`;
