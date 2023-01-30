import { Sale } from "app/models/sales";
import { useFormik } from "formik";

interface SalesFormProps {
  onSubmit: (sale: Sale) => void;
}

const formScheme: Sale = {
  client: {},
  product: [],
  total: 0,
  payment: "",
};
export const SalesForm: React.FC<SalesFormProps> = ({ onSubmit }) => {
  const formik = useFormik<Sale>({
    onSubmit,
    initialValues: formScheme,
  });
  return <form onSubmit={formik.handleSubmit}></form>;
};
