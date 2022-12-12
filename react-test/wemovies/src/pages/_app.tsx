import type { AppProps } from "next/app";
import Header from "../components/organisms/Header/Header";
import { CartProvider } from "../context/cart";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <GlobalStyle />

         <div className='contentContainer'>
            <CartProvider>
               <Header />
               <Component {...pageProps} />
            </CartProvider>
         </div>
      </>
   );
}
export default MyApp;
