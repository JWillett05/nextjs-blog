import localFont from "next/font/local";
import "./globals.css";
import { createContext } from "react";
import CartContainer from "./CartContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export const CartContext = createContext([])

export default function layout(){
  const cartItems = [
    {id: 1},
    {id: 2}
  ]
  return(
    <main className="layout">
      <CartContext.Provider value = {cartItems}>
        <CartContainer/>
      </CartContext.Provider>
    </main>
  )
}
