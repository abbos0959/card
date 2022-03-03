import React from 'react'

export const Login = () => {
  return (
    <div class="humberger__menu__widget">
    <div class="header__top__right__language">
      <img src="assets/img/language.png" alt="" />
      <div>English</div>
      <span class="arrow_carrot-down"></span>
      <ul>
        <li>
          <a href="#">Spanis</a>
        </li>
        <li>
          <a href="#">English</a>
        </li>
      </ul>
    </div>
    <div class="header__top__right__auth">
      <a href="#">
        <i class="fa fa-user"></i> Login
      </a>
    </div>
  </div>
  )
}
