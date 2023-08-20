import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <div>
        <div className="footer">
          <div className="top">
            <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrival</span>
            </div>
            <div className="item">
              <h1>Lins</h1>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
            <div className="item">
              <h1>About</h1>
              <span>E-commerce, short for electronic commerce,
                 revolutionizes buying and selling by enabling transactions online.
                 It encompasses online stores, digital marketplaces, and mobile apps,
                 providing convenience, and diverse products. 
                 Shoppers can explore, and purchase at their fingertips, 
                 reshaping the retail landscape.</span>
            </div>
            <div className="item">
            <h1>Contact</h1>
              <span>E-commerce, short for electronic commerce,
                 revolutionizes buying and selling by enabling transactions online.
                 It encompasses online stores, digital marketplaces, and mobile apps,
                 providing convenience, and diverse products. 
                 Shoppers can explore, and purchase at their fingertips, 
                 reshaping the retail landscape.</span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <span className='logo'>Lamastore</span>
              <span className='copyright'> &copy; Copyright 2023. All rights reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="payment methods" />
            </div>
          </div>
        </div>
    </div>
  )
}
