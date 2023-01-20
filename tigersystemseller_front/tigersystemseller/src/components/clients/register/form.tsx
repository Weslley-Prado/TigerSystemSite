import { Client } from "app/models/clients";
import { Input, InputCPF, InputDate, InputPhone } from "components/common";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
interface ClientFormProps {
  client: Client;
  onSubmit: (client: Client) => void;
}

const formScheme: Client = {
  id: "",
  name: "",
  cpf: "",
  birthDate: "",
  address: "",
  email: "",
  phoneNumber: "",
  dateRegister: "",
};

export const ClientForm: React.FC<ClientFormProps> = ({ client, onSubmit }) => {
  const formik = useFormik<Client>({
    initialValues: { ...formScheme, ...client },
    onSubmit,
    enableReinitialize: true,
    validationSchema: validationSchema,
  });

  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.values.id && (
        <div className="columns">
          <Input
            id="id"
            name="id"
            label="Código: "
            disabled
            columnClass="is-half"
            autoComplete="off"
            value={formik.values.id}
          />
          <Input
            id="dateRegister"
            name="dateRegister"
            disabled
            label="Data de Cadastro: *"
            columnClass="is-half"
            autoComplete="off"
            value={formik.values.dateRegister}
          />
        </div>
      )}
      <div className="columns">
        <Input
          id="name"
          name="name"
          label="Nome: *"
          columnClass="is-full"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
      </div>
      <div className="columns">
        <InputCPF
          id="cpf"
          name="cpf"
          label="Cpf: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.cpf}
          error={formik.errors.cpf}
        />
        <InputDate
          id="birthDate"
          name="birthDate"
          label="Data de Nascimento: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
          error={formik.errors.birthDate}
        />
      </div>
      <div className="columns">
        <Input
          id="address"
          name="address"
          label="Endereço: *"
          columnClass="is-full"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.address}
          error={formik.errors.address}
        />
      </div>
      <div className="columns">
        <Input
          id="email"
          name="email"
          label="Email: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <InputPhone
          id="phoneNumber"
          name="phoneNumber"
          label="Telefone: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={formik.errors.phoneNumber}
        />
      </div>
      <div className="field is-grouped">
        <div className="control is-link">
          <button className="button" type="submit">
            {formik.values.id ? "Atualizar" : "Salvar"}
          </button>
        </div>
      </div>
    </form>
  );
};
