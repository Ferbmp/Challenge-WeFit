import React, {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useEffect,
   useState,
} from "react";
import { Product } from "../types";
import { priceFormatter } from "../utils/priceFormatter";

type Cart = Product[];

interface CartContextType {
   cart: Array<Product>;
   itemsPrice: number;
   totalPrice: string;
   setCart: Dispatch<SetStateAction<Cart>>;
   handleAddItemToCart: (product: Product) => void;
   handleRemoveItemFromCart: (product: Product) => void;
   handleRemoveOneItemOfCart: (product: Product) => void;
}

const initialValue = {
   cart: [{ id: 0, title: "", image: "", price: 0, qty: 0 }],
   itemsPrice: 0,
   totalPrice: "",
   setCart: () => {},
   handleAddItemToCart: () => {},
   handleRemoveItemFromCart: () => {},
   handleRemoveOneItemOfCart: () => {},
};
export const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
   const [cart, setCart] = useState<Cart>([]);

   const itemsPrice = cart
      ? cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
      : 0;

   const totalPrice = priceFormatter(Number(itemsPrice?.toFixed(2)));

   useEffect(() => {
      const cartFromLocalStorage = localStorage.getItem("cart");

      const cart = cartFromLocalStorage && JSON.parse(cartFromLocalStorage);

      cart ? setCart(cart) : setCart([]);
   }, []);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

   function handleRemoveItemFromCart(product: Product) {
      setCart(cart.filter((item) => item.id !== product.id));
   }

   function handleAddItemToCart(product: Product) {
      const exist = cart.find((item) => item.id === product.id);
      if (exist) {
         setCart(
            cart.map((item) =>
               item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
            )
         );
      } else {
         setCart([...cart, { ...product, qty: 1 }]);
      }
   }

   function handleRemoveOneItemOfCart(product: Product) {
      const exist = cart.find((item) => item.id === product.id);
      if (exist && exist.qty > 0) {
         setCart(
            cart.map((item) =>
               item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
            )
         );
      }
      if (exist && exist.qty <= 1) handleRemoveItemFromCart(product);
   }

   return (
      <CartContext.Provider
         value={{
            cart,
            setCart,
            handleAddItemToCart,
            handleRemoveItemFromCart,
            handleRemoveOneItemOfCart,
            itemsPrice,
            totalPrice,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
