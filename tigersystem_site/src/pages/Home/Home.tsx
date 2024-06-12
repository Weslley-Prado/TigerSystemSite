import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";

import BusinessTeam from "../../assets/img/businessTeam.png";
import TeamEnginerring from "../../assets/img/teamEnginerring.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; // Ícones para os botões

import "./Home.scss";

export function Home() {

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        <FaArrowAltCircleLeft />
      </div>
    );
  };

  const CustomNextArrow = (props: any ) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <FaArrowAltCircleRight />
      </div>
    );
  };

  const services = [
    { 
      title: 'Desenvolvimento Web', 
      description: 'Transforme sua presença online com nossos serviços de Desenvolvimento Web! Criamos sites dinâmicos, responsivos e visualmente impressionantes, que não só atraem visitantes, mas também convertem.',
      image: TeamEnginerring
    },
    { 
      title: 'Desenvolvimento Mobile', 
      description: 'Leve seu negócio para o próximo nível com nossos aplicativos móveis personalizados! Desenvolvemos apps intuitivos e de alta performance para Android e iOS, projetados para engajar seus clientes e otimizar processos internos.',
      image: TeamEnginerring
    },
    { 
      title: 'Microserviços', 
      description: 'Implementamos e gerenciamos arquiteturas de microserviços que permitem atualizações rápidas e independentes, melhorando a manutenção e a resiliência do seu sistema.',
      image: TeamEnginerring
    },
    { 
      title: ' Testes Funcionais', 
      description: 'Verificamos minuciosamente cada funcionalidade do seu sistema para assegurar que tudo funciona conforme o esperado, prevenindo falhas e garantindo a satisfação do usuário final.',
      image: TeamEnginerring
    },
    { 
      title: 'Testes Automatizados', 
      description: 'Reduza o tempo e os custos de testes com soluções automatizadas que identificam bugs rapidamente e garantem que novas funcionalidades não quebrem o sistema existente.',
      image: TeamEnginerring
    },
    { 
      title: 'Testes de Performance', 
      description: 'Avaliamos a capacidade do seu software de lidar com carga, identificando gargalos e assegurando uma experiência de usuário fluida mesmo sob alta demanda.',
      image: TeamEnginerring
    },
    { 
      title: 'Integração de Sistemas', 
      description: 'Facilitamos a comunicação entre diversas plataformas e aplicativos, criando um ambiente operacional mais coeso e eficiente que impulsiona a produtividade do seu negócio.',
      image: TeamEnginerring
    },
    { 
      title: 'Arquitetura de Software e Soluções', 
      description: 'Desenvolvemos arquiteturas escaláveis e flexíveis que suportam o crescimento do seu negócio, integrando as melhores práticas e tecnologias de ponta para soluções duradouras.',
      image: TeamEnginerring
    },
    { 
      title: 'Assessment de Sistemas', 
      description: 'Realizamos uma análise completa dos seus sistemas atuais, identificando áreas de melhoria e proporcionando insights valiosos para otimizar a performance e a segurança.',
      image: TeamEnginerring
    },
    { 
      title: 'DevOps', 
      description: 'Integramos desenvolvimento e operações para melhorar a colaboração, automatizar processos e entregar software de alta qualidade mais rapidamente.',
      image: TeamEnginerring
    },
    { 
      title: 'Data Analytics', 
      description: 'Utilizamos técnicas avançadas de análise de dados para fornecer informações estratégicas que ajudam a tomar decisões informadas e impulsionar seu negócio.',
      image: TeamEnginerring
    },
    { 
      title: 'Inteligência Artificial', 
      description: 'Desenvolvemos soluções de IA que automatizam processos, melhoram a eficiência e criam novas oportunidades de negócios, adaptando-se às suas necessidades específicas.',
      image: TeamEnginerring
    },
    { 
      title: 'Mentoria e Treinamento Técnico', 
      description: 'Oferecemos programas personalizados de mentoria e treinamento que atualizam suas habilidades, promovem o crescimento profissional e preparam sua equipe para enfrentar os desafios tecnológicos de amanhã.',
      image: TeamEnginerring
    },
    { 
      title: 'Administração de Infra', 
      description: 'Gerenciamos e otimizamos toda a sua infraestrutura de TI, incluindo servidores, redes e armazenamento, para garantir que seus sistemas funcionem sem interrupções e com máxima eficiência.',
      image: TeamEnginerring
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   nextArrow: <FaArrowAltCircleRight />,
  //   prevArrow: <FaArrowAltCircleLeft />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: false,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicialize AOS e defina a duração da animação para 1 segundo
  }, []);
  
  return (
    <>
      <Carousel className="carousel" variant="white">
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <div data-aos="fade-right">
            <h5 className="corouselParagraph" data-aos="fade-right" data-aos-delay="200">
              Descubra Nossas Soluções Inovadoras</h5>
            <p className="corouselParagraph" data-aos="fade-right" data-aos-delay="400">
            Desenvolvemos software personalizado e oferecemos consultoria especializada em TI para empresas
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
          <div data-aos="fade-right">
            <h5 className="corouselParagraph" data-aos="fade-right" data-aos-delay="200">Excelência em Atendimento</h5>
            <p className="corouselParagraph" data-aos="fade-right" data-aos-delay="400">Estamos prontos para entender suas necessidades e fornecer soluções sob medida</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sizeImg" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
          <div data-aos="fade-right">
            <h5 className="corouselParagraph" data-aos="fade-right" data-aos-delay="200" >Fale Conosco</h5>
            <p className="corouselParagraph" data-aos="fade-right" data-aos-delay="400" >Oferecemos as melhores soluções em TI para transformar seu negócio</p>
            </div>
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
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service" data-aos="fade-right">
              <h3>{service.title}</h3>
              <img src={service.image} alt={service.title} className="serviceImage" />
              <p>{service.description}</p>
            </div>
          ))}
        </Slider>
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
