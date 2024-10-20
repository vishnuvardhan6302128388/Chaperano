import {Link} from "react-router-dom"

import {CgProfile} from 'react-icons/cg'

import {FiShoppingCart} from 'react-icons/fi'

import {GoSearch} from 'react-icons/go'

import CartContext from "../../context/CartContext"

import './index.css'

const Header = props => {
  const {searchInput, changeSearchInput} = props
  const renderFirstHeader = () => (
    <div className="top-container">
      <p className="free-shipping">Free Shipping on orders above 999/-</p>
      <p className="contact-no">Contact us on: +91 98768 05120</p>
    </div>
  )

  return (
    <CartContext.Consumer>
      {value=>{
        const {cartList}= value

        return(
          <>
          {renderFirstHeader()}
      <nav className="header-container">
        <div className="web-logo-container">
          <img
            src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729270558/vozl55mqoecbomqvjq1s.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="website-name">Chaperone</h1>
        </div>
        <ul className="options-container">
          <li className="list-item">
          <Link to="/" className="link-item">Home</Link>
            </li>
          <li className="list-item" >Plants & Pots</li>
          <li className="list-item">
            Tools
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729273206/cs9o3sljjpbu7yo6cpwk.png"
              alt="subtract"
            />
          </li>
          <li className="list-item">
            Our Services
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729273206/cs9o3sljjpbu7yo6cpwk.png"
              alt="subtract"
            />
          </li>
          <li className="list-item">Blog</li>
          <li className="list-item">Our Stroy</li>
          <li className="list-item">FAQs</li>
        </ul>
        <div className="user-details-container">
          <div className="profile-container">
            <CgProfile size={30} />
            <h1 className="profile-head">My Profile</h1>
          </div>
          <div className="cart-container">
            <div className="cart-list-length-container">
            <FiShoppingCart size={30} />
            <p className="cart-length">{cartList.length}</p>
            </div>
            <h1 className="cart-head">Cart</h1>
          </div>
        </div>
      </nav>
      <div className="search-container">
        <GoSearch size={25} />
        <input
          type="search"
          placeholder="Search plant"
          className="search-input"
          value={searchInput}
          onChange={changeSearchInput}
        />
        <img
          src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729328437/dyiljzia7bacro1tpewv.png"
          alt="leaf -picture"
          className="leaf-picture"
        />
      </div>
          </>
        )
      }}
      
      
    </CartContext.Consumer>
   
  )
}

export default (Header)
