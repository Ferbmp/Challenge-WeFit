import * as React from "react";

import { StyledCircularProgress, Container, ProgressContainer } from "./styles";

function FacebookCircularProgress() {
   return (
      <ProgressContainer>
         <StyledCircularProgress
            variant='determinate'
            size={56}
            thickness={2}
            value={100}
         />
         <StyledCircularProgress
            variant='indeterminate'
            disableShrink
            size={56}
            thickness={2.5}
         />
      </ProgressContainer>
   );
}

export default function CircularProgressBar() {
   return (
      <Container>
         <FacebookCircularProgress />
      </Container>
   );
}
