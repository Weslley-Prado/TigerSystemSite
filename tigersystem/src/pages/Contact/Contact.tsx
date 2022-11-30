import React from "react"

export  function Contact() {
   return(
    <form>
        <div>
            <input type="text" name="nome" placeholder="Digite seu nome completo" required={true} />
            <input type="text" name="email" placeholder="Digite seu email" required/>
            <input type="phone" name="telefone" placeholder="Digite celular" required/>
            <input type="number" name="document" placeholder="CPF ou CNPJ" required/>
            <textarea name="require" placeholder="Escreva sua mensagem"></textarea>
        </div>
    </form>
   )
}