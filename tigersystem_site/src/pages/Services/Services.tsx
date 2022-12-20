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
          <p className="lead">Desenvolvemos as melhores soluções em websites para sua empresa
          permitindo que sua empresa fique mais vísivel alcançando novos clientes. Confira os modelos 
          de páginas que temos!
          </p>
          <button className="buttonService">Nosso Portifólio</button>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
        <h3>Criação de Ecommerce</h3>
          <hr />
          <p className="lead">
            Temos as melhores soluções para você que não quer depender apenas de um local físico para seu negócio.
            Atualmente, as vendas por meio da internet têm crescido em larga escala e estamos aqui para trazer
            sua empresa para internet.  
          </p>
          <button className="buttonService">Nosso Portifólio</button>
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
          <p className="lead">Não se preocupe com a sua máquina ou seu servidor local. Deixa que nós 
          da Tiger System cuidamos para você. Nossa equipe é treinada e especializada para cuidar
          do funcionamento do coração de seus sistemas comerciais.
         </p>
          <button className="buttonService">Saiba mais</button>
        </div>
      </section>
      <section className="contentleft">
        <div className="textLeft">
        <h3>Controle de Backup</h3>
          <hr />
          <p className="lead">Acabe com aquela preocupação de fazer backup ou de ter que sempre aumentar
          a capacidade do seu computador. Nós da Tiger System possuímos competências técnicas para cuidar
          da segurança do seus dados.
          </p>
          <button className="buttonService">Saiba mais</button>
        </div>
        <div className="imgProductRight">
          <img src={Backup} />
        </div>
      </section>
    </div>
  );
}
