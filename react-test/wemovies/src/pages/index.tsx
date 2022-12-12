import axios from "axios";
import React from "react";
import useSWR from "swr";
import CircularProgressBar from "../components/atoms/CircularProgress/CircularProgress";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import { Container } from "../styles/pages/home";
import { Product } from "../types";

export default function Home() {
   const fetcher = (url: string) => axios.get(url).then((res) => res.data);
   const { data, error } = useSWR("/api/products", fetcher);

   if (!data) {
      return <CircularProgressBar />;
   }
   if (error) {
      alert(error);
   }

   return (
      <Container>
         {data &&
            data?.products.map((product: Product, index: number) => {
               const { title, price, image, id } = product;
               return (
                  <ProductCard
                     key={index}
                     title={title}
                     price={price}
                     image={image}
                     id={id}
                  />
               );
            })}
      </Container>
   );
}
