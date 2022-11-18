import React, { useCallback, useState } from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";
import Software from "../../assets/img/softwares.jpg";

import Automatic from "../../assets/video/verifica.gif";
import Show from "../../assets/video/apresentacao.gif";
import Watch from "../../assets/video/relogio.gif";
import Search from "../../assets/video/procurar.gif";

import "./Home.css";

export function Home() {
  return (
    <>
      <Carousel className="carousel"variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 sizeImg"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="corouselParagraph">
              Confira em nosso site as nossas soluções
            </h5>
            <p className="corouselParagraph">
              Especialista no desenvolvimento de soluções de softwares digitais
              para empresas
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sizeImg"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="corouselParagraph">Temos o melhor atendimento</h5>
            <p className="corouselParagraph">
              Estamos preparados para melhor lhe entender
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sizeImg"
            src={Banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="corouselParagraph">Entre em contato conosco</h5>
            <p className="corouselParagraph">
              Temos as melhores soluções para sua empresa
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <main>
        <h2 className="mainTitle">
          {" "}
          Empresa especializada em automação comerical, desenvolvimentos de
          sites e ecommerce
        </h2>
        <p className="mainParagraph">
          Contamos com uma equipe especializada pronta para entregar soluções
          tecnológicas para sua empresa. Confira os nossos serviços e produtos
          em nosso site e entre em contato conosco. Garantimos o melhor
          atendimento e suporte. Atendemos todo o Brasil e exterior, estamos
          localizados em Linhares, Espírito Santo
        </p>
      </main>
      <section className="showIntroductionHome">
        <div className="introductionHome">
          <img className="d-block w-100 sizeGif" src={Show} alt="First slide" />
          <p>
            Consiga clientes das mais diferentes regiões por ter a sua empresa
            acessível para o mundo. A Tiger System ajuda as empresas a
            conseguirem clientes por meio de desenvolvimento e divulgação de
            sites.
          </p>
        </div>
        <div className="introductionHome">
          <img
            className="d-block w-100 sizeGif"
            src={Watch}
            alt="First slide"
          />
          <p>
            A Tiger System utiliza o que há mais de tecnológicos da atualidade e
            estamos em constante atualização acompanhando o mercado de TI. Por isso.
            incentivamos você a conhecer mais de nossos serviços.
          </p>
        </div>
        <div className="introductionHome">
          <img
            className="d-block w-100 sizeGif"
            src={Search}
            alt="First slide"
          />
          <p>
            Fique a apenas um clique de seus clientes, a tendência é cada vez
            mais serviços e produtos serem fornecedidos via web, pois traz mais
            praticidade durante todo o processo de compra e venda. Entre em
            contato conosco e conheça mais os nossos serviços!
          </p>
        </div>
        <div className="introductionHome">
            <img
            className="d-block w-100 sizeGif"
            src={Automatic}
            alt="First slide"
          />
          <p>
            Além disso, temos sistemas que automatizam tarefas do seu negócios.
            Permitindo que você ofereça uma melhor experiências aos seus
            clientes. Confira já os nossos serviços e produtos.
          </p>
        </div>
      </section>
      <section className="informMore">
        <div className="infoMore">
          <h2>Aplicações de qualidade para o seu negócio</h2>
          <hr />

          <div className="imgInfo">
            <img className="imgSetInfo" src={Software} />
            <div className="textDivHome">
            <p className="textInfoHome">
              Buscamos oferecer o que há de mais atual na tecnologia para sua empresa. A nossa preocupação
              é que sua empresa aproveita ao máximo o que o mundo da computação tem a nos proporcionar!
            </p>
            <p className="textInfoHome">
              Os nossos profissionais se preocupam com todos os detalhes no desenvolvimento, na instalação
              e no suporte do seu site, sistema ou ecommerce. Tentamos proporcionar a melhor experiênciaso
              para você e seu cliente
            </p>
            <p className="textInfoHome">
              Entre em contato conosco e confira as nossas ofertas, garantimos a sua satisfação.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
