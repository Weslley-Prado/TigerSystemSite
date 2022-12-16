import { useState } from "react";
import { Layout, Input } from "components";

export const RegisterProducts: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    const product = {
      sku,
      price,
      name,
      description,
    };
    console.log(product);
  };
  return (
    <Layout title="Cadastro de produtos">
      <div className="columns">
        <Input
          label="Nome do produto: *"
          columnClass="is-half"
          value={sku}
          onChange={setSku}
          id="inputSku"
          placeholder="Digite o SKU do produto"
        />

        <Input
          label="Preço: *"
          columnClass="is-half"
          value={price}
          onChange={setPrice}
          id="inputPrice"
          placeholder="Digite o preço do produto"
        />
      </div>

      <div className="columns">
        <Input
          label="Preço: *"
          columnClass="is-full"
          value={name}
          onChange={setName}
          id="inputName"
          placeholder="Digite o nome do produto"
        />
      </div>

      <div className="columns">
        <div className="column is-full">
          <div className="field">
            <label className="label" htmlFor="inputDescription">
              Descrição: *
            </label>
            <div className="control">
              <textarea
                className="textarea"
                id="inputDescription"
                onChange={(event) => setDescription(event?.target.value)}
                value={description}
                placeholder="Digite a descrição detalhada do produto"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Salvar
              </button>
            </div>

            <div className="control">
              <button className="button is-link is-light">Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
