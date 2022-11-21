import React from "react";
import Software from "../../assets/img/about.jpg";
import "./About.css";

export function About() {
  return (
    <>
      <section>
        <div className="titleAboutDiv">
          <h1 className="titleAbout"> Quem somos </h1>
        </div>
        <div className="aboutCompany">
          <img src={Software} alt="Empresa" className="aboutImg" />
          <div>
            <p className="lead">
              A TIGERSISTEM é uma empresa de programação de sistemas comerciais,
              sistemas de restaurantes, nota fiscal, sistema de chamados,
              desenvolvimento de Websites, eccomerce, aplicativos e lojas
              virtuais para diversos fins.
            </p>
            <p className="lead">
              Desde 2020 atuamos em projetos de diversos segmentos e porte de
              empresas. Trabalhamos com diversas tecnologias FrontEnd, BackEnd e
              Mobile, além dos nossos especialistas em Arquitetura de software e
              Analistas de Negócios, que garantem que todos os projetos sejam
              pensados e planejados para atender o crescimento e evolução
              tecnológica que o projeto necessite.
            </p>
            <p className="lead">
              Através das nossas equipes multidisciplinares, somos capazes de
              entender as necessidades dos nossos clientes e desenvolver
              softwares personalizados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
