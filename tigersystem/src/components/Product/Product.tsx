import React from "react";
import "./Product.css";
import TigerSystemOrder from "../../assets/img/about.jpg";
export function Product() {
  return (
    <div>
      <div className="titleProduct">
        <h1 className="title">Sistemas perfeitos para seu negócio</h1>
        <hr />
      </div>
      <section className="contentRight">
        <div className="imgProductLeft">
          <img src={TigerSystemOrder} />
        </div>
        <div className="textRight">
          <p>Texto</p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
          <p>Texto</p>
        </div>
        <div className="imgProductRight">
          <img src={TigerSystemOrder} />
        </div>
      </section>
      <section className="contentRight">
        <div className="imgProductLeft">
          <img src={TigerSystemOrder} />
        </div>
        <div className="textRight">
          <p>Texto</p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
          <p>Texto</p>
        </div>
        <div className="imgProductRight">
          <img src={TigerSystemOrder} />
        </div>
      </section>
    </div>
  );
}
