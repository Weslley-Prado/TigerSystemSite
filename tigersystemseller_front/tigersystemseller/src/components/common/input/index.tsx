import { InputHTMLAttributes } from "react";
import { formatReal } from "app/util/money";
import { FormatUtils } from "@4us-dev/utils";

const formatUtils = new FormatUtils();

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  // onChange?: (value: any) => void;
  label: string;
  columnClass?: string;
  error?: string;
  formatter?: (value: string) => string;
}

export const Input: React.FC<InputProps> = ({
  label,
  columnClass,
  id,
  error,
  formatter,
  onChange,
  ...inputProps
}: InputProps) => {
  const onInputChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    const formattedValue = (formatter && formatter(value as string)) || value;

    onChange({
      ...event,
      target: {
        name,
        value: formattedValue,
      },
    });
  };
  return (
    <div className={`field column ${columnClass}`}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <input
          type="text"
          className="input"
          onChange={onInputChange}
          id={id}
          {...inputProps}
        />
        {error && <p className="help is-danger">{error}</p>}
      </div>
    </div>
  );
};

export const InputMoney: React.FC<InputProps> = (props: InputProps) => {
  return <Input {...props} formatter={formatReal} />;
};

export const InputCPF: React.FC<InputProps> = (props: InputProps) => {
  return <Input {...props} formatter={formatUtils.formatCPF} />;
};

export const InputPhone: React.FC<InputProps> = (props: InputProps) => {
  return <Input {...props} formatter={formatUtils.formatPhone} />;
};

export const InputDate: React.FC<InputProps> = (props: InputProps) => {
  const formatDate = (value: string) => {
    if (!value) {
      return "";
    }
    const date = formatUtils.formatOnlyIntegers(value);
    const size = value.length;
    if (size <= 2) {
      return date;
    }
    if (size <= 4) {
      return date.substr(0, 2) + "/" + date.substr(2, 2);
    }
    if (size <= 6) {
      return (
        date.substr(0, 2) + "/" + date.substr(2, 2) + "/" + date.substr(4, 2)
      );
    }
  };

  return <Input {...props} maxLength={10} formatter={formatDate} />;
};
