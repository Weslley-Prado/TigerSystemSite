import React from "react";
import "./Product.css";
import TigerSystemOrder from "../../assets/img/about.jpg";
import { Link } from "react-router-dom";
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
          <h3>Tiger System - Gourmet</h3>
          <hr />
          <p className="lead">
            O sistema Tiger Sistem Gourmet proporciona uma experiência única
            para seu restaurante. Com ele é possível que o garçom faça o pedido
            e ele seja enviado para a cozinha sem o garçom precisar ir lá. Isso
            melhora a qualidade do atendimento aos seus clientes. <br />
            <Link to="/contato">
              <button className="buttonProduct">Saiba mais</button>
            </Link>
          </p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
          <h3>Tiger Sistem - Seller</h3>
          <hr />
          <p className="lead">
            O Tiger Sistem Seller proporciona uma melhor experiência no seu
            comércio ao realizar vendas. Ele atende muito bem comércios em
            geral, como autopeças, depósitos, casas de ração e muitos outros.{" "}
            <br />
            <Link to="/contato">
              <button className="buttonProduct">Saiba mais</button>
            </Link>
          </p>
        </div>
        <div className="imgProductRight">
          <img src={TigerSystemOrder} />
        </div>
      </section>
      {/* <section className="contentRight">
        <div className="imgProductLeft">
          <img src={TigerSystemOrder} />
        </div>
        <div className="textRight">
        <h3>Tiger System - Ponto Eletrônico</h3>
          <hr />
          <p>Texto</p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
        <h3>Tiger System - Emissor de Nota Fiscal</h3>
          <hr />
          <p>Texto</p>
        </div>
        <div className="imgProductRight">
          <img src={TigerSystemOrder} />
        </div>
      </section> */}
    </div>
  );
}
