import {Component} from 'react'

import {MdEmail} from 'react-icons/md'
import {FaYoutube, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'

import './index.css'

class AllInformationSection extends Component {
  state = {inputField: ''}

  changeInputField = e => {
    this.setState({inputField: e.target.value})
  }

  render() {
    const {inputField} = this.state
    return (
      <div className="footer-contanier">
        <div className="first-container">
          <div className="subscribe-container">
            <h1 className="subscribe-header">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className="subscribe-description">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <input
              value={inputField}
              onChange={this.changeInputField}
              placeholder="Enter Your Email Address"
              className="input-field"
            />
            <button type="button" className="subscribe-button">
              Subscribe
            </button>
          </div>
          <ul className="about-container">
            <h1 className="about-header">ABOUT US</h1>
            <li className="list-items">Our Story</li>
            <li className="list-items">Blogs</li>
            <li className="list-items">Careers</li>
            <li className="list-items">Contact Us</li>
            <li className="list-items">Help & Support</li>
          </ul>
          <div className="services-container">
            <h1 className="service-header">OUR SERVICES</h1>
            <p className="services">Book Maali</p>
            <p className="services">Plant Day Care</p>
            <p className="services">Rent Plants</p>
            <p className="services">Plants & Pots</p>
            <p className="services">Gardening Tools</p>
          </div>
          <div className="useful-container">
            <h1 className="useful-header">USEFUL LINKS</h1>
            <p className="links">My Account</p>
            <p className="links">Orders & Returns</p>
            <p className="links">Track Order</p>
            <p className="links">Terms & Conditions</p>
            <p className="links">Privacy Policy</p>
            <p className="links">Return, Refund & Replacement Policy</p>
          </div>
          <div className="get-in-touch-container">
            <h1 className="get-in-touch-header">GET IN TOUCH</h1>
            <p className="address">
              Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
              Gurgaon, Haryana, India 122003
            </p>
            <p className="phone-no">
              Call:
              <br /> +919958287272
            </p>
            <p className="email">
              Email:
              <br /> care@chaperoneplants.com
            </p>
          </div>
        </div>
        <h1 className="chaprone">CHAPERONE</h1>
        <p className="chaprone-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <h1 className="follow-us-section">Follow us on</h1>
        <div className="icons-container">
          <FaInstagram size={30} />
          <FaFacebook size={30} />
          <MdEmail size={30} />
          <FaYoutube size={30} />
          <FaLinkedin size={30} className="icons" />
        </div>
        <hr className="horizontal-line" />
        <p className="last-line">© 2023, chaperone.com All rights reserved.</p>
      </div>
    )
  }
}

export default AllInformationSection
