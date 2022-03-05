import React, { useState } from "react";
import { Card } from "./component/Card";
import { LeftBar } from "./component/LeftBar";
import { Navbar } from "./component/Navbar";
import { NavMobile } from "./component/NavMobile";
import { Slider } from "./component/Slider";
import { Yazik } from "./component/Yazik";
import { Search } from "./Search";
import { Map } from "./component/Map";
import { Mahsulot } from "./component/Mahsulot";
import { Past } from "./component/Past";
import { Footer } from "./component/Footer";
import { Login } from "./component/Login";
import { Tepa } from "./component/Tepa";
import { Tepas } from "./component/Tepas";
import { Banner } from "./component/Banner";
import { Shopp } from "./component/Shopp";
import { CardMap } from "./component/CardMap";

function App() {
  const [data, setdata] = useState([]);
  const [basket, setbasket] = useState(false);

  const BasketItem = () => {
    setbasket(!basket);
  };
  const HandleDelete = (id) => {
    const salom = data.filter((a) => a.id !== id);
    setdata(salom);
  };

  const AddtoCard = (value) => {
    const exist = data.find((x) => x.id === value.id);
    if (exist) {
      setdata(
        data.map((x) =>
          x.id === value.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setdata([...data, { ...value, qty: 1 }]);
    }
  };
  const Ayiruv = (id) => {
    const NewOrd = data.map((el) => {
      if (el.id === id && el.qty > 0) {
        const NewQuanti = el.qty - 1;
        return {
          ...el,
          qty: NewQuanti,
        };
      } else {
        return el;
      }
    });
    setdata(NewOrd);
  };
  console.log(basket);
  return (
    <div className="MainDiv">
      <div class="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
          <a href="#" class="logo">
            V-Shop
          </a>
        </div>
        <Shopp />
        <Login />
        <NavMobile />
        <div id="mobile-menu-wrap"></div>
        <Tepa />
      </div>

      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <Tepas />
              <Yazik />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="header__logo">
                <a href="#" class="logo">
                  V-Shop
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <Navbar />
            </div>
            <Card BasketItem={BasketItem} data={data} />
          </div>
          <div class="humberger__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {basket && (
        <CardMap
        Ayiruv={Ayiruv}
          AddtoCard={AddtoCard}
          HandleDelete={HandleDelete}
          data={data}
        />
      ) }
      

      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="hero__categories">
                <div class="hero__categories__all">
                  <i class="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <LeftBar />
              </div>
            </div>
            <Search />
          </div>
        </div>
      </section>

      <Slider />
      <Map data={data} setdata={setdata} />

      <Banner />
      <Mahsulot />
      <Past />

      <Footer />
    </div>
  );
}

export default App;
