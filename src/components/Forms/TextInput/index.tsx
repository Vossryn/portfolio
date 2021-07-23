import { useFormContext, Path } from "react-hook-form";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

interface TextInputProps {
  label: Path<IFormValues>;
  className: string;
  type?: string;
  required?: boolean;
}

export default function TextInput({
  label,
  type = "text",
  required = false,
  className,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${className} relative`}>
      <input
        className={`peer 
          text-blue-900 
          bg-blue-100 
          focus:bg-white 
          active:bg-white 
          p-2 
          w-full
          rounded-md 
          focus:outline-none 
          active:outline-none 
          placeholder-transparent`}
        type={type}
        placeholder={label}
        {...register(label, { required })}
      />
      <label
        htmlFor={label}
        className={`
          absolute 
          transition-all 
          ease-in-out
          -top-6 
          left-2 
          text-blue-50 
          peer-focus:text-sm
          peer-placeholder-shown:top-2 
          peer-focus:-top-6
          peer-placeholder-shown:text-black
          peer-focus:text-blue-50`}
      >
        {label}
      </label>
      {errors[label] && <div className="text-sm text-yellow-500">{label} is Required</div>}
    </div>
  );
}
