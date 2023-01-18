import { Client } from "app/models/clients";
import { Input } from "components/common";
import { useFormik } from "formik";

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
  });
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
        />
      </div>
      <div className="columns">
        <Input
          id="cpf"
          name="cpf"
          label="Cpf: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.cpf}
        />
        <Input
          id="birthDate"
          name="birthDate"
          label="Data de Nascimento: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
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
        />
      </div>
      <div className="columns">
        <Input
          id="email"
          name="email"
          label="Data de Nascimento: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          id="phoneNumber"
          name="phoneNumber"
          label="Telefone: *"
          columnClass="is-half"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
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
