import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import './FeaturedProducts.scss'


const FeaturedProducts = ({type}) => {


    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type  }`)

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            exercitationem quod voluptate quas quibusdam, quia, quos voluptates
            voluptatibus exercitationem quod voluptate quas
        </p>
      </div>
      <div className="bottom">
        {error ? 'something went wrong...' : (loading ? 'loading...' : data?.map(item => (
            <Card item={item} key={item.id} />
        )))}
        
      </div>
    </div>
  )
}

export default FeaturedProducts
