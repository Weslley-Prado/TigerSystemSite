import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

import "./Contact.css";

export function Contact() {
  const API_PATH = "https://tigersistem.com/send-email/email.php";
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    api.post(API_PATH);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formContent">
        <div className="inputContent">
          <label>Nome *</label>
          <div>
            <input
              type="text"
              {...register("fullname")}
              placeholder="Digite o seu nome"
              required={true}
            />
          </div>
          <label>Email *</label>
          <div>
            <input
              type="text"
              {...register("email")}
              placeholder="Digite o seu email"
              required
            />
          </div>
          <label>Celular *</label>
          <div>
            <input
              type="phone"
              {...register("phoneNumber")}
              placeholder="Digite o seu telefone"
              required
            />
          </div>
          <label>CNPJ/CPF</label>
          <div>
            <input
              {...register("document")}
              placeholder="Digite o seu CPF ou CNPJ"
              required
            />
          </div>
          <label>Mensagem</label>
          <div>
            <textarea
              {...register("message")}
              placeholder="Escreva sua mensagem"
            />
          </div>
          <input type="submit" className="formButton" />
        </div>
      </div>
    </form>
  );
}
