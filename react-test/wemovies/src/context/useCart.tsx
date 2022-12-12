import { useContext } from "react";
import { CartContext } from "./cart";

export const useCart = () => {
   const context = useContext(CartContext);
   return context;
};

export default useCart;
