'use client'
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div className="homeP">
        <section className="hBanner">
          <div className="wrapper">
            <img src="img/home-banner.jpg" alt="Main Banner" />
          </div>
        </section>
        <section className="welcome-sec">
          <div className="wrapper">
            <div className="wLeft">
            <Carousel>
                    <img src="img/wBanner.jpg" alt="Welcome Banner" />
                    <img src="img/g2.jpg" alt="Welcome Banner" />
                    <img src="img/g9.jpg" alt="Welcome Banner" />
            </Carousel>
              {/* <img src="img/wBanner.jpg" alt="Welcome Banner" /> */}
            </div>
            <div className="wRight">
              <h1><span>Welcome to</span>Sunderban Weald Camp </h1>
              <p>The infrastructure over here has been developed with the aim to support the local people subsistence. </p>
              <p>Sunderban Weald Camp - an Ecotourism project which is located at the last forest village known as Bali.</p>
              <p>We offered tourists the unique opportunity to stay in a environment while enjoying all the luxuries of civilized life</p>
              <a href="/about" className="btn-sm">Read More</a>
            </div>
          </div>
        </section>
        <section className="room-sec">
        <div className="wrapper">
          <h2>Our Activities</h2>
          <p>Sundarbans is renowned for its biodiversity. Royal Bengal Tigers, spotted deer, saltwater crocodiles, and various species of birds. A guided safari through the dense mangroves gives you a chance to spot these fascinating creatures in their natural habitat.</p>
          <ul className="roomList">
            <li><a href="/ouractivities">
              <img src="img/activity1.jpg" alt="Rooms" />
              <span>Wildlife Viewing</span></a>
            </li>
            <li><a href="/ouractivities">
              <img src="img/activity2.jpg" alt="Rooms" />
              <span>Boat safari</span></a>
            </li>
            <li><a href="/ouractivities">
              <img src="img/activity3.jpg" alt="Rooms" />
              <span>Nouka journey & Jungle Walk</span></a>
            </li>
            <li><a href="/ouractivities">
              <img src="img/g12.jpg" alt="Rooms" />
              <span>Mithology Drama (Banabibi Pala)</span></a>
            </li>
          </ul>
          </div>
        <div className="wrapper">
          <h2>Our cottages & Rooms</h2>
          <p>We have exclusive ethnic cottages with modern attach bath cum toilet facilities</p>
          <ul className="roomList">
            <li>
              <img src="img/r1.jpg" alt="Rooms" />
              <span>Family  Room</span>
            </li>
            <li>
              <img src="img/r2.jpg" alt="Rooms" />
              <span>The Balcony</span>
            </li>
            <li>
              <img src="img/r3.jpg" alt="Rooms" />
              <span>Delux Room</span>
            </li>
            <li>
              <img src="img/r4.jpg" alt="Rooms" />
              <span>Dining Room</span>
            </li>
          </ul>
          </div>
        </section>
        <section className="map-sec">
          <div className="wrapper"><a href="https://maps.app.goo.gl/5x4nCFMMFik3zxa47" target="_blank">
            <img src="img/sundarban-map.png" alt="" /></a>
          </div>
        </section>
    </div>
  )
}
