import React from 'react'
import './Home.css'
import banner from './banner.png'
import Product from './Product'
import productimage2 from './productimage2.webp'
import productimage1 from './productimage1.jpeg'
import productimage3 from './productimage3.webp'
import productimage4 from './productimage4.jpg'
import productimage5 from './productimage5.webp'
import productimage6 from './productimage6.webp'
import productimage7 from './productimage7.webp'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_banner' src={banner} alt="" />

            <div className='home_row'>
                <Product id="123456789" title="LookMark Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt" price={1500} image={productimage2} rating={4} />
                <Product id="345612342" title="Men's Cotton Turtle Neck Sweater" price={2000} image={productimage1} rating={3} />
                <Product id="987345687" title="Cotton Jackets Male Mens Cotton Jacket" price={3000} image={productimage3} rating={5} />
                
            </div>
            <div className='home_row'>
                <Product id="098373765" title="Cotton Jackets Male Mens Cotton Jacket" price={4500} image={productimage4} rating={5} />
                <Product id="124322341" title="Men 's tshirt 100% cotton" price={900} image={productimage5} rating={3} />
                <Product id="452345123" title="Jordan Men's Air" price={23000} image={productimage6} rating={5}/>
            </div>

            <div className='home_row'>
                <Product id="346242366" title="Men 's Black blazer" price={2300} image={productimage7} rating={4} />
            </div>
        </div>
    </div>
  );
}

export default Home
