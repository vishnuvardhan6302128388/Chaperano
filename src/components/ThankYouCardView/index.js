import {Component} from "react"

import { SiTicktick } from "react-icons/si";

import CartContext from "../../context/CartContext";

import "./index.css"

class ThankYouCardView extends Component{

    shoppingBtn=()=>{
        const {history} =this.props 
        history.replace("/")
    }

    render(){
       return   <CartContext.Consumer>{value=>{
                 const {viewCartName}= value

                 return  <div className="thank-you-view-container">
                   <div className="sub-container">
                   <SiTicktick className="tick-icon"/>
                    <p className="thankful">Thank you for your interest in <span className="plant_name">{viewCartName}</span>.
                         We are pleasure to received this interest from you.</p>
                    <button className="shopping-btn" type="button" onClick={this.shoppingBtn}>Continue Shopping</button>
                   </div>
                   
                </div>
                }}
               
                </CartContext.Consumer>
    }
}

export default ThankYouCardView