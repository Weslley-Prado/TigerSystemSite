import React from "react";
import "./Services.css";
import Site from "../../assets/img/site.jpg";
import Ecommerce from "../../assets/img/ecommerce.jpg";
import Server from "../../assets/img/server.jpg";
import Backup from "../../assets/img/backup.jpg";


export function Services() {
  return (
    <div>
      <div className="titleProduct">
        <h1 className="title">As melhores soluções para o seu negócio</h1>
        <hr />
      </div>
      <section className="contentRight">
        <div className="imgProductLeft">
          <img src={Site} />
        </div>
        <div className="textRight">
          <h3>Criação de Sites</h3>
          <hr />
          <p>Desenvolvemos </p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
        <h3>Criação de Ecommerce</h3>
          <hr />
          <p>Desenvolvemos </p>
        </div>
        <div className="imgProductRight">
          <img src={Ecommerce} />
        </div>
      </section>
      <section className="contentRight">
        <div className="imgProductLeft">
          <img src={Server} />
        </div>
        <div className="textRight">
        <h3>Controle de servidores</h3>
          <hr />
          <p>Desenvolvemos </p>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
        <h3>Controle de Backup</h3>
          <hr />
          <p>Desenvolvemos </p>
        </div>
        <div className="imgProductRight">
          <img src={Backup} />
        </div>
      </section>
    </div>
  );
}
