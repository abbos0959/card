import React from "react";

export const Navbar = () => {
  return (
    
    <nav class="header__menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Pages</a>
            <ul class="header__menu__dropdown">
                <li><a href="#">Shop Details</a></li>
                <li><a href="#">Shoping Cart</a></li>
                <li><a href="#">Check Out</a></li>
                <li><a href="#">Blog Details</a></li>
            </ul>
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
    
  );
};
