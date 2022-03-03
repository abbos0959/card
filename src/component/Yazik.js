import React from 'react'

export const Yazik = () => {
  return (
    <div class="col-lg-6 col-md-6">
    <div class="header__top__right">
      <div class="header__top__right__social">
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-pinterest-p"></i>
        </a>
      </div>
      <div class="header__top__right__language">
        <img src="assets/img/language.png" alt="" />
        <div>English</div>
        <span class="arrow_carrot-down"></span>
        <ul>
          <li>
            <a href="#">Uzbek</a>
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
  </div>
  )
}
