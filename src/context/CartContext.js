import React from "react"


const CartContext= React.createContext({
    cartList:[],
    addCartItem:()=>{},
    viewCartName:"",
    viewCartItem:()=>{}
})

export default CartContext