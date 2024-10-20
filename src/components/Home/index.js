// Write your JS code here

import {Component} from 'react'

import Slider from 'react-slick'

import Header from '../Header'

import EachPlantCard from '../EachPlantCard'

import FilterSection from '../FilterSection'

import AllInformationSection from '../AllInformationSection'

import Pagination from "../Pagination"

import data from "./data.json"

import 'reactjs-popup/dist/index.css'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'




const postImagesList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308152/rj1ukibpw7npjeiqezof.png',
    altText: 'plant-1',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308292/qiumbhpqjwyubopiiez3.png',
    altText: 'plant-2',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308398/nuzxf8bcjammlxdt2gix.png',
    altText: 'plant-3',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308453/vjgb9iwqayddymwlalp3.png',
    altText: 'plant-4',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },

  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308511/bd1v8l0diwpwagldbrow.png',
    altText: 'plant-5',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 6,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729309369/v6idczabaoq9dj73gzhy.jpg',
    altText: 'plant-6',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 7,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729309435/oj4mjgvahvm1vahglasg.jpg',
    altText: 'plant-7',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 8,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308152/rj1ukibpw7npjeiqezof.png',
    altText: 'plant-8',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 9,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308292/qiumbhpqjwyubopiiez3.png',
    altText: 'plant-9',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 10,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308398/nuzxf8bcjammlxdt2gix.png',
    altText: 'plant-10',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 11,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308453/vjgb9iwqayddymwlalp3.png',
    altText: 'plant-11',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },

  {
    id: 12,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729308511/bd1v8l0diwpwagldbrow.png',
    altText: 'plant-12',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 13,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729309369/v6idczabaoq9dj73gzhy.jpg',
    altText: 'plant-13',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 14,
    imageUrl:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729309435/oj4mjgvahvm1vahglasg.jpg',
    altText: 'plant-14',
    description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
]


class Home extends Component {
  state = {searchInput: ''}

  renderReactPostImages = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 2,
      slidesToShow: 4,
    }
    return (
      <>
        <Slider
          {...settings}
          slidesToShow={6}
          className="user-stories-desktop-view"
        >
          {postImagesList.map(eachItem => (
            <ul key={eachItem.id} className="post-list-container">
              <li className="post-list-item">
                <div className="post-list-item-container">
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.altText}
                    className="post-link"
                  />
                </div>
                <p className="post-description">{eachItem.description}</p>
              </li>
            </ul>
          ))}
        </Slider>
      </>
    )
  }

  changeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }


  addCartItem=(produt)=>{
      this.setState((prevState)=>({cartList:[...prevState.cartList,produt]}))
  }

  render() {

    const {searchInput} = this.state  
    const searchedResults = data.filter(each =>
      each.productName.toLowerCase().includes(searchInput.toLowerCase()),
    )


    return (
    
       <><Header
          searchInput={searchInput}
          changeSearchInput={this.changeSearchInput}
        />
        {searchInput === '' ? (
          <div>
            <div className="buttons-container">
              <button className="plants-btn" type="button">
                Plants
              </button>
              <button className="pots-btn" type="button">
                Pots
              </button>
            </div>
            <p className="about-description">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis.
              <br /> Non molestiae ratione et laborum doloribus aut molestiae
              voluptates ut porro excepturi sit molestiae obcaecati qui quis
              beatae est voluptatem eius. Et architecto nihil id labore omnis
              hic iste deleniti et porro aspernatur.
            </p>
            <h1 className="nursery-header">Nursery</h1>
            {this.renderReactPostImages()}
            <div className="filter-and-plants-container">
              <FilterSection />
              <div className="sort-option">
                <div className="sort-container"><p>{data.length} products </p>
                <select placeholder="Sort By">
                  <option>High-to-Low</option>
                  <option>High-to-Low</option></select></div>
              <Pagination plantsImagesList={data}/>
              </div>
                 </div>
            
             <AllInformationSection/>
          </div>
        ) : (
          <div className="search-container2">
            <h1 className="search-header2">Search Results</h1>
            <ul className="search-product-container2">
              {searchedResults.map(item => (
                <EachPlantCard key={item.pid} itemDetails={item} />
              ))}
            </ul>
          </div>
        )}
      </>
    
    )
  }


}

export default Home
