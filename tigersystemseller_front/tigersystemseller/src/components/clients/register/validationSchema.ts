import * as Yup from "yup";

const requiredField = "Campo obrigatório";
const requiredFieldYup = Yup.string().trim().required(requiredField);

export const validationSchema = Yup.object().shape({
  name: requiredFieldYup,
  cpf: requiredFieldYup.length(14, "CPF Inválido"),
  birthDate: requiredFieldYup.length(10, "Data Inválida"),
  address: requiredFieldYup,
  email: requiredFieldYup.email("Email Inválido"),
  phoneNumber: requiredFieldYup,
});
