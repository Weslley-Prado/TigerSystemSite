import { useEffect, useState } from "react";
import { Layout, Input, Message } from "components";
import { useProductService } from "app/services";
import { Product } from "app/models/products";
import { convertToBigDecimal, formatReal } from "app/util/money";
import { Alert } from "components/common/message";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";

const msgRequired = "Campo obrigatório";

const validationSchema = yup.object().shape({
  sku: yup.string().trim().required(msgRequired),
  name: yup.string().trim().required(msgRequired),
  description: yup.string().trim().required(msgRequired),
  price: yup
    .number()
    .required(msgRequired)
    .moreThan(0, "Valor deve ser mais que zero"),
});

interface FormErrors {
  sku?: string;
  name?: string;
  price?: string;
  description?: string;
}

export const RegisterProducts: React.FC = () => {
  const service = useProductService();
  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<number>();
  const [register, setRegister] = useState<string>();
  const [messages, setMessages] = useState<Array<Alert>>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  const { id: queryId } = router.query;

  useEffect(() => {
    if (queryId) {
      service.loadProduct(queryId).then((findProduct) => {
        setId(findProduct.id);
        setSku(String(findProduct.sku));
        setName(String(findProduct.name));
        setDescription(String(findProduct.description));
        setPrice(formatReal(`${findProduct.price}`));
        setRegister(findProduct.register || "");
      });
    }
  }, [queryId]);

  const handleSubmit = () => {
    const product: Product = {
      id,
      sku,
      price: convertToBigDecimal(price),
      name,
      description,
    };

    validationSchema
      .validate(product)
      .then((obj) => {
        setErrors({});
        if (id) {
          service.updateProduct(product).then((response) =>
            setMessages([
              {
                type: "success",
                text: "Produto atualizado com sucesso",
              },
            ])
          );
        } else {
          service.saveProduct(product).then((productResponse) => {
            setId(productResponse.id);
            setRegister(productResponse.register);
            setMessages([
              {
                type: "success",
                text: "Produto salvo com sucesso",
              },
            ]);
          });
        }
      })
      .catch((err) => {
        const field = err.path;
        const message = err.message;
        setErrors({
          [field]: message,
        });
      });
  };
  return (
    <Layout title="Cadastro de produtos" messages={messages}>
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
          error={errors.sku}
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
          error={errors.price}
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
          error={errors.name}
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
              {errors.description && (
                <p className="help is-danger">{errors.description}</p>
              )}
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                {id ? "Atualizar" : "Salvar"}
              </button>
            </div>

            <div className="control">
              <Link href="/search/products">
                <button className="button is-link is-light">Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
