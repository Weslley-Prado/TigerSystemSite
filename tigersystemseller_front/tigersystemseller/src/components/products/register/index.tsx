import { useState } from "react";
import { Layout, Input, Message } from "components";
import { useProductService } from "app/services";
import { Product } from "app/models/products";
import { convertToBigDecimal } from "app/util/money";

export const RegisterProducts: React.FC = () => {
  const service = useProductService();
  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<number>();
  const [register, setRegister] = useState<string>();

  const handleSubmit = () => {
    const product: Product = {
      id,
      sku,
      price: convertToBigDecimal(price),
      name,
      description,
    };

    if (id) {
      service
        .updateProduct(product)
        .then((response) => console.log("Atualizado"));
    } else {
      service.saveProduct(product).then((productResponse) => {
        setId(productResponse.id);
        setRegister(productResponse.register);
      });
    }
  };
  return (
    <Layout title="Cadastro de produtos">
      {id && (
        <div className="columns">
          <Input
            label="Código: "
            columnClass="is-half"
            value={id}
            id="inputId"
            disabled
          />
          <Input
            label="Data Cadastro: "
            columnClass="is-half"
            value={register}
            onChange={setPrice}
            id="inputDateRegister"
            disabled
          />
        </div>
      )}

      <div className="columns">
        <Input
          label="SKU: *"
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
          currency
          maxLength={16}
        />
      </div>
      <div className="columns">
        <Input
          label="Digite o nome do produto: *"
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
                {id ? "Atualizar" : "Salvar"}
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
