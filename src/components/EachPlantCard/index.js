import {useState} from "react"

import {withRouter} from "react-router-dom"

import CartContext from "../../context/CartContext"

import { IoClose } from "react-icons/io5";

import './index.css'

const  EachPlantCard  =(props)=> {

  const [modal,setModal] =useState(false)
  

   return ( <CartContext.Consumer>{value=>{
      const {addCartItem,viewCartItem} =value
 
      const toggleModel=()=>{
        setModal(!modal)
        console.log("Clicked")
      }

      const {itemDetails} = props
      const {productName, productImage, productType, price, rating} = itemDetails

      const viewCartItemBtn=()=>{
          viewCartItem({...itemDetails})
         const {history} =props 
         history.replace("/thank-you-page") 
        }
      
        const confirmClicking=()=>{
          addCartItem({...itemDetails})
        }

      return <li className="list-items-container">
      <div className="image-container">
        <img className="plant-img" src={productImage} alt={productName} />
        <button className="view-btn" type="button" onClick={viewCartItemBtn}>
          View Product
        </button>
      </div>
      <h1 className="product-name">{productName}</h1>
      <p className="product-type">{productType}</p>
      <div className="rating-container">
        <img
          src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729339447/mqoy6s5yv8bdd7nvoo7t.png"
          alt="rating"
          className="rating-image"
        />
        <p className="rating">{rating}</p>
      </div>
      <div className="price-container">
        <p className="price1">₹ 359</p>
        <p className="price">₹ {price}</p>
      </div>
      <div className="buttons-container-add-buy">
        <button className="add-to-cart-btn" type="button" onClick={toggleModel}>
          - Add to cart +
        </button>{modal &&  <div className="modal">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="modal-content">
            <div className="thank-your-card-container">
            <h1 className="card-header">Your Cart</h1>
              <hr className="horizontal-line" />
            <h1 className="wishes">Congratulations Order Placed!</h1>
          <img
             src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729267088/ttpzfhfgz3liqd674yzn.png"
             alt="plant"
             className="plant-picture"
            />
            <p className="wishes-description">
               Thank you for choosing Chaperone services. We will soon get in touch with
                   you!
             </p>
             
             
             <button type="button" className="confirm-btn" onClick={confirmClicking}>Confirm Order</button> 
             <button type="button" className="close-modal" onClick={toggleModel}>
             <IoClose sie={30}/>
           
            </button>
           
          </div>
        </div>
        </div>
        }
        <button className="buy-or-rent-btn" type="button">
          Buy or Rent
        </button>
      </div>
    </li>
    }}
    
    </CartContext.Consumer>
  )
}

export default withRouter(EachPlantCard)
