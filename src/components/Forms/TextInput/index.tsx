import { UseFormRegister } from "react-hook-form/dist/types/form";
import { Path } from "react-hook-form/dist/types/utils";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

interface TextInputProps {
  label: Path<IFormValues>;
  className: string;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
}

export default function TextInput({
  label,
  register,
  required = false,
  className = "text-black",
}: TextInputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input className={className} {...(register(label), { required })} />
    </div>
  );
}
