import React from 'react'
import {Product} from './Product'
import '../../stylesheets/ProductList.scss'

export const ProductList = ({ products=[]}) =>
    <div className="products-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
