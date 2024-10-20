import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Component} from "react"

import Home from './components/Home'

import CartContext from './context/CartContext'

import ThankYouCardView from "./components/ThankYouCardView"


import './App.css'


class App extends Component{
  state={cartList:[],viewCartItem:" "}

  addCartItem=(produt)=>{
    this.setState((prevState)=>({cartList:[...prevState.cartList,produt]}))
}

viewCartItem=(item)=>{
   const {productName} ={...item}
   console.log(productName)
   this.setState({viewCartName:productName})
}

  
    render(){
      const {cartList,viewCartName} =this.state
    return (<BrowserRouter>
       <CartContext.Provider value={{
          cartList,
          viewCartName,
          addCartItem:this.addCartItem,
          viewCartItem:this.viewCartItem
    }}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/thank-you-page" component={ThankYouCardView}/>
    </Switch>
    </CartContext.Provider>
    </BrowserRouter>
    )
    }
  }

export default App
