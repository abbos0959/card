import React from "react";

export const Search = () => {
  return (
    <div class="col-lg-9">
      <div class="hero__search">
        <div class="hero__search__form">
          <form action="#">
            <input placeholder="Search" />
            <button type="submit" className="site-btn">
              Search
            </button>
          </form>
        </div>
        <div class="hero__search__phone">
          <div class="hero__search__phone__icon">
            <i class="fa fa-phone"></i>
          </div>
          <div class="hero__search__phone__text">
            <h5>+998906770959</h5>
            <span>support 24/7 time</span>
          </div>
        </div>
      </div>
      <div class="hero__item set-bg" data-setbg="assets/img/hero/banner.jpg">
        <div class="hero__text">
          <span>FRUIT FRESH</span>
          <h2>
            Vegetable <br />
            100% Organic
          </h2>
          <p>Free Pickup and Delivery Available</p>
          <a href="#" class="primary-btn">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};
