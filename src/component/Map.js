import React, { useState } from 'react'


export const Map = ({setdata}) => {
    const Data = [
        {
          id: 1,
          img: "assets/img/featured/feature-1.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"met"
        },
        {
          id: 2,
          img: "assets/img/featured/feature-2.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"fresh"
        },
        {
          id: 3,
          img: "assets/img/featured/feature-3.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"oranges"
        },
        {
          id: 4,
          img: "assets/img/featured/feature-4.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"fresh"
        },
        {
          id: 5,
          img: "assets/img/featured/feature-5.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"fresh"
        },
        {
          id: 6,
          img: "assets/img/featured/feature-6.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"met"
        },
        {
          id: 7,
          img: "assets/img/featured/feature-7.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"oranges"
        },
        {
          id: 8,
          img: "assets/img/featured/feature-8.jpg",
          name: "Crab Pool Security",
          price: "30.00",
          category:"fresh"
        },
      ];


      const AddtoCard=(value)=>{
          setdata((oldcard)=>{
              return(
                  [...oldcard,value]
              )
          })

      }
      
      
      
  return (
    
    <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Featured Product</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">
                All
              </li>
              <li data-filter=".oranges">Oranges</li>
              <li data-filter=".fresh-meat">Fresh Meat</li>
              <li data-filter=".vegetables">Vegetables</li>
              <li data-filter=".fastfood">Fastfood</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
      {Data.map((value)=>(
          


          <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              data-setbg={value.img}
            >
              <ul class="featured__item__pic__hover">
                <li>
                  <a href="#">
                    <i class="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <a >
                    <i onClick={()=>AddtoCard(value)}  class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6>
                <a href="#">Crab Pool Security</a>
              </h6>
              <h5>${value.price}</h5>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </section>
  )
}
