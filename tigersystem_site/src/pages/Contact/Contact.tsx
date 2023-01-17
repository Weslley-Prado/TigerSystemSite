import React from "react";
import "./Contact.css";

export function Contact() {
  return (
    <form>
      <div className="formContent">
        <div className="inputContent">
          <label>Nome *</label>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              required={true}
            />
          </div>
          <label>Email *</label>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <label>Celular *</label>
          <div>
            <input
              type="phone"
              name="telefone"
              placeholder="Digite celular"
              required
            />
          </div>
          <label>CNPJ/CPF</label>
          <div>
            <input
              type="text"
              name="document"
              placeholder="CPF ou CNPJ"
              required
            />
          </div>
          <label>Mensagem</label>
          <div>
            <textarea name="require" placeholder="Escreva sua mensagem" />
          </div>
          <button className="formButton">Enviar</button>
        </div>
      </div>
    </form>
  );
}
