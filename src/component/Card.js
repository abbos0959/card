import React from 'react'

export const Card = () => {
  return (
    <div class="col-lg-3">
    <div class="header__cart">
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-heart"></i> <span>10</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-shopping-bag"></i> <span>3</span>
          </a>
        </li>
      </ul>
      <div class="header__cart__price">
        item: <span>$150.00</span>
      </div>
    </div>
  </div>
  )
}
