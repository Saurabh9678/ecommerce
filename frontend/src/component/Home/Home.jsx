import React, { Fragment } from 'react'
import "./Home.css"
import Product from "./Product.jsx"
const Home = () => {
  return (
    <Fragment>
    <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll
              </button>
            </a>
    </div>

    <h2 className="homeHeading">Featured Products</h2>


    </Fragment>
  )
}

export default Home