import React from "react";
import {HeaderNav} from "./header-nav/HeaderNav";
import {HeaderPic} from "./header-pic/HeaderPic";

/*import './Header.scss'*/

export const Header = () =>
    <div className="header">
        <HeaderPic/>
        <HeaderNav/>
    </div>