import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-width: 960px;
   height: auto;
   border-radius: 4px;
   background-color: var(--white);
   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   margin-top: 2rem;

   @media (max-width: 500px) {
      max-width: 90%;
      margin-top: 1rem;
   }
`;
