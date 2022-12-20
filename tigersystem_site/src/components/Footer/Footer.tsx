import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

export function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conecte-se conosco através das nossas redes sociais:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <Link to="/" className="logo ">
                <img className="logo" src={Logo} alt="logo" />
              </Link>
              <p>
               Nossa empresa fica feliz com a sua visita ao nosso site.
               Estamos aqui prontos para para melhor atender as necessidades
               de nossos clientes.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sistema de Comanda
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sistema de Vendas
                </a>
              </p>
              {/* <p>
                <a href="#!" className="text-reset">
                  Ponto Eletrônico
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Emissor de Nota Fiscal
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Serviços</h6>
              <p>
                <a href="#!" className="text-reset">
                  Criação de sites
                </a>
              </p>
              {/* <p>
                <a href="#!" className="text-reset">
                  Criação de Ecommerce
                </a>
              </p> */}
              <p>
                <a href="#!" className="text-reset">
                  Controle de servidores
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Controle de Backup
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Linhares, ES 29900-034, Brasil
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
               atendimento@tigersystem.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 55
                28 9 9921 2075
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 55
                27 9 9760 0502
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Tiger System - www.tigersystem.com
        </a>
      </div>
    </MDBFooter>
  );
}
