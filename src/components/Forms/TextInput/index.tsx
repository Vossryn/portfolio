import { useFormContext, Path } from "react-hook-form";

type IFormValues = {
  Email: string;
  "First Name": string;
  "Last Name": string;
  Message: string;
  Subject: string;
};

interface TextInputProps {
  label: Path<IFormValues>;
  placeholder?: string;
  className: string;
  type?: string;
  required?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  type = "text",
  required = false,
  className,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${className} relative h-16`}>
      <input
        className={`peer 
          text-black
          bg-blue-100 
          focus:bg-white 
          active:bg-white 
          p-2 
          w-full
          rounded-md 
          focus:outline-none 
          focus:placeholder-gray-400
          active:outline-none 
          placeholder-transparent`}
        type={type}
        placeholder={placeholder}
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
          text-sm 
          text-blue-50 
          peer-focus:text-sm
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-base 
          peer-focus:-top-6
          peer-placeholder-shown:text-black
          peer-focus:text-white
          pointer-events-none`}
      >
        {label} {required ? " *" : null}
      </label>
      {errors[label] && <div className="text-sm text-yellow-500 pl-2">{label} is Required</div>}
    </div>
  );
}
