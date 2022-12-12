import React, { ReactNode } from "react";
import { Container } from "./styles";

export default function ContentWrapper({ children }: { children: ReactNode }) {
   return <Container>{children}</Container>;
}
