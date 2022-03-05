import React from "react";

export const Navbar = ({BasketItem}) => {
  return (
    
    <nav class="header__menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#shopp">Shop</a></li>
        <li><a href="#">Pages</a>
            <ul class="header__menu__dropdown">
                <li><a href="#map">Shop Details</a></li>
                <li onClick={()=>BasketItem()}><a >Shoping Cart</a></li>
                <li><a href="#">Check Out</a></li>
                <li><a href="#blog">Blog Details</a></li>
            </ul>
        </li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
    
  );
};
