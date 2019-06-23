import React from "react";
import {Link} from "react-router-dom";

export const HeaderNav = () =>
    <div className="header-nav">
        <nav>
            <Link to="about">[About HEADER]</Link>
            <Link to="events">[Events HEADER]</Link>
            <Link to="products">[Product HEADER]</Link>
            <Link to="contact">[Contact Us HEADER]</Link>
        </nav>
    </div>