import React, { useCallback, useState } from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg"
import Banner3 from "../../assets/img/banner3.jpg"
import GridModel from "../util/Grid/GridModel";
import "./Home.css"


export function Home() {
    return(
        <>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 sizeImg"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sizeImg"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sizeImg"
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <GridModel/>
    </>
    )
}
