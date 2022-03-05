import React from 'react'

export const Card = ({data,BasketItem ,total}) => {
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
          <a >
            <i onClick={()=>BasketItem()} class="fa fa-shopping-bag"></i> <span>{data.length}</span>
          </a>
        </li>
      </ul>
      <div class="header__cart__price">
        item: <span>{total}$ </span>
      </div>
    </div>
  </div>
  )
}
