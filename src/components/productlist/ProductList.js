import React from 'react'
import {ProductView} from '../product/Product-view'
import '../../stylesheets/ProductList.scss'

export const ProductList = ({ products=[]}) =>
    <div className="products-list">
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
        <ProductView/>
    </div>
