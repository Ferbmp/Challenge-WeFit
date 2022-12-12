import styled from "styled-components";
import CircularProgress, {
   CircularProgressProps,
} from "@mui/material/CircularProgress";

export const StyledCircularProgress = styled(
   CircularProgress
)<CircularProgressProps>`
   color: ${({ variant }) =>
      variant === "indeterminate" ? "#5b5b66" : "#cac9cb"};
   position: ${({ variant }) => variant === "indeterminate" && "absolute"};
   left: ${({ variant }) => variant === "indeterminate" && "0"};
   animation-duration: ${({ variant }) =>
      variant === "indeterminate" && "450ms"};
`;

export const ProgressContainer = styled.div`
   position: relative;
`;

export const Container = styled.div`
   flex-grow: 1;
   width: 100%;
   margin-top: 18%;
   justify-content: center;
   align-items: center;
   display: flex;
   padding: 0.5px;

   @media (max-width: 500px) {
      height: 50vh;
   }
`;
