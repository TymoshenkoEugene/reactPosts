import {Header} from '../header/Header'
import {Footer} from '../footer/Footer'
import React from 'react'
import {PostList} from '../post-list/PostList'
/*import '../../stylesheets/pages.scss'
import '../nav/CategoriesNav.scss'*/

export const PageTemplate = ({children}) =>
    <div className="home">
        <Header/>
        <NavContext children={children}/>
        {/*{children}*/}
        <Footer/>
    </div>

export const NavContext = ({children}) =>
    <div className="nav-context">
        {children}
    </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <PostList/>
        </section>
    </PageTemplate>