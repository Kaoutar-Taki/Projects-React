import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from './ProductItem'

const ProductsList = () => {
    const [productsList, setProductsList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [currentCategory, setCurrentCategory] = useState()


    const dispalyCategories = () => {
        return categoryList.map((category, key) =>
            <button key={key}
                className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
                onClick={(e) => {
                    e.preventDefault()
                    setCurrentCategory(category)
                }}>
                {category}
            </button>
        )
    }

    const displayProducts = () => {
        const filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()) || product.description.toLowerCase().includes(searchInput.toLowerCase()))
        if (currentCategory) {
            return filteredProducts.filter(product => product.category === currentCategory).map(product => {
                return <ProductItem key={product.id} product={product} />
            })
        }
        if (filteredProducts.length > 0) {
            return filteredProducts.map(product => {
                return <ProductItem key={product.id} product={product} />
            })
        } else {
            return <tr><td colSpan={7}>No products found</td></tr>
        }
    }

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products').then(response => response.json()).then(response => setProductsList(response))
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories').then(response => response.json()).then(response => setCategoryList(response))
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = document.querySelector('#search').value;
        setSearchInput(searchValue);
    }

    return (
        <div className='container-fluid mx-auto w-75 my-3'>
            <form action="">
                <div className='form-outline mb-4'>
                    <label htmlFor="search" className='form-label'>Search</label>
                    <div className='input-group'>
                        <input type="text" name="search" id="search" className='form-control' onChange={handleSearch} />
                        <button type='reset' className='btn btn-secondary' onClick={() => { setSearchInput('') }}>X</button>
                    </div>
                </div>
                {/* <input type="submit" value='Search' className='btn btn-primary' id='search' onClick={handleSearch} /> */}
                <div className="row g-3 align-items-centre">
                    <div className="btn-group btn-secondary gap-3">
                        <button type='button' className='btn btn-secondary' onClick={() => setCurrentCategory(null)}>All</button>
                        {dispalyCategories()}
                    </div>
                </div>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList
