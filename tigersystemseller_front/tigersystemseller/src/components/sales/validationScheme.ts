import * as Yup from "yup";

export const validationScheme = Yup.object().shape({
  client: Yup.object().nullable(true).required("Campo obrigatório!"),
  items: Yup.array().min(1, "Deve conter pelo menos um produto!"),
  payment: Yup.string().trim().required("Campo obrigatório!"),
});
