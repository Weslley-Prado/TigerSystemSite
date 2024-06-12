import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";

import BusinessTeam from "../../assets/img/businessTeam.png";
import TeamEnginerring from "../../assets/img/teamEnginerring.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Home.scss";

export function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicialize AOS e defina a duração da animação para 1 segundo
  }, []);
  
  return (
    <>
      <Carousel className="carousel" variant="white">
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h5 className="corouselParagraph">Confira em nosso site as nossas soluções</h5>
            <p className="corouselParagraph">
              Especialista no desenvolvimento de soluções de softwares digitais para empresas
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            <h5 className="corouselParagraph">Temos o melhor atendimento</h5>
            <p className="corouselParagraph">Estamos preparados para melhor lhe entender</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
            <h5 className="corouselParagraph">Entre em contato conosco</h5>
            <p className="corouselParagraph">Temos as melhores soluções para sua empresa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <main className="mainHome" data-aos="fade-up">
        <h2 data-aos="fade-up" data-aos-delay="100">Tiger Sistem</h2>
        <p className="paragraphMainHome" data-aos="fade-up" data-aos-delay="200">
          Somos uma empresa de engenharia e consultoria em tecnologia da informação, oferecendo uma ampla gama de serviços tecnológicos.
          Especializamos-nos no desenvolvimento de software personalizado, integração de sistemas, desenvolvimento web e mobile, micro serviços,
          arquitetura de software e soluções. Além disso, fornecemos mentoria e treinamento técnico para capacitar sua equipe.
        </p>
        <p className="paragraphMainHome" data-aos="fade-up" data-aos-delay="300">
          Também somos especialistas em promover a transformação digital completa das empresas, incluindo o gerenciamento de bancos de dados
          e a administração de infraestrutura de TI.
        </p>
      </main>

      <section className="sectionHomeTeam" data-aos="fade-up">
        <h2>Nossa Equipe</h2>
        <div className="equipe">
          <div className="membro" data-aos="fade-up" data-aos-delay="200">
            <h3>Comercial</h3>
            <img className="imgAdmTeam" src={BusinessTeam} alt="Nome do Membro 2" />
            <p>
              Nossa equipe é composta por especialistas altamente capacitados em arquitetura, desenvolvimento, engenharia de software e gestão de projetos.
              Somos uma equipe multidisciplinar, capaz de integrar as principais tecnologias ao mundo dos negócios.
            </p>
          </div>
          <div className="membro" data-aos="fade-up" data-aos-delay="400">
            <h3>Engenharia</h3>
            <img className="imgTeam" src={TeamEnginerring} alt="Nome do Membro 1" />
            <p>
              Nossa equipe é composta por especialistas altamente capacitados em arquitetura, desenvolvimento, engenharia de software e gestão de projetos.
              Somos uma equipe multidisciplinar, capaz de integrar as principais tecnologias ao mundo dos negócios.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionHomeServices" data-aos="fade-up">
        <h2>Nossos Serviços</h2>
        {/* <div className="equipe">
          <div className="membro" data-aos="fade-up" data-aos-delay="200">
            <h3>Comercial</h3>
            <img className="imgAdmTeam" src={BusinessTeam} alt="Nome do Membro 2" />
            <p>
              Nossa equipe é composta por especialistas altamente capacitados em arquitetura, desenvolvimento, engenharia de software e gestão de projetos.
              Somos uma equipe multidisciplinar, capaz de integrar as principais tecnologias ao mundo dos negócios.
            </p>
          </div>
          <div className="membro" data-aos="fade-up" data-aos-delay="400">
            <h3>Engenharia</h3>
            <img className="imgTeam" src={TeamEnginerring} alt="Nome do Membro 1" />
            <p>
              Nossa equipe é composta por especialistas altamente capacitados em arquitetura, desenvolvimento, engenharia de software e gestão de projetos.
              Somos uma equipe multidisciplinar, capaz de integrar as principais tecnologias ao mundo dos negócios.
            </p>
          </div>
        </div> */}
      </section>
      {/* <section className="informMore">
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
      </section> */}
    </>
  );
}
