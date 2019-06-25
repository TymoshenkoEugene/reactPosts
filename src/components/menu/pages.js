import { Link, Route } from 'react-router-dom'
import { Header } from '../headers/header'
import { Footer } from '../footers/footer'
import { Nav } from '../nav/Nav'
import React from 'react'
import {ProductList} from '../products/ProductList'
import '../../stylesheets/pages.scss'
import '../../stylesheets/NavContext.scss'

export const PageTemplate = ({children}) =>
    <div className="home">
        <Header/>
        <NavContext children={children}/>
        {/*{children}*/}
        <Footer/>
    </div>

export const NavContext = ({children}) =>
    <div className="nav-context">
        <Nav/>
        {children}
    </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <ProductList/>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us!!]</h1>
        </section>
    </PageTemplate>

export const About = () =>
    <PageTemplate>
        <section className="about">
            <h1>About the Companyrftyfhf</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>
            <p>
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
                nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
        </section>
    </PageTemplate>