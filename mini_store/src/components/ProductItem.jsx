import React from 'react'
import Rating from './Rating'

const ProductItem = ({ product }) => {
    return (
        <tr>
            <th>{product.id}</th>
            <th><img src={product.image} alt={product.title} width={70} /></th>
            <th>{product.title}</th>
            <th>{product.price} $</th>
            <th>{product.description.slice(0, 100)}...</th>
            <th><span className='badge badge-pill bg-dark'>{product.category}</span></th>
            <th><Rating rate={product.rating.rate} count={product.rating.count} /></th>
        </tr>
    )
}

export default ProductItem
