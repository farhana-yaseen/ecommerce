
"use client"

import CartContextProvider from "@/CartContextProvider";
import { SessionProvider } from "next-auth/react"


type Props={
  children?:React.ReactNode;
  
}

const Layout = ({ children }: Props) => {
  

  return (
    <div>
      <SessionProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </SessionProvider>

    </div>
  )
}

export default Layout
