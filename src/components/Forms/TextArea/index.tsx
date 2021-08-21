import { useFormContext, Path } from "react-hook-form";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

interface TextInputProps {
  label: Path<IFormValues>;
  placeholder: string;
  className: string;
  type?: string;
  required?: boolean;
}

export default function TextArea({
  label,
  placeholder,
  required = false,
  className,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${className} relative h-[7.25rem]`}>
      <textarea
        className={`peer 
          text-black
          bg-blue-100 
          focus:bg-white 
          active:bg-white
          resize-none
          p-2 
          w-full
          h-28
          rounded-md 
          focus:outline-none 
          focus:placeholder-gray-400
          active:outline-none 
          placeholder-transparent`}
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
          text-white
          peer-focus:text-sm
          peer-focus:-top-6
          peer-focus:text-white
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-black
          pointer-events-none`}
      >
        {label} {required ? " *" : null}
      </label>
      {errors[label] && (
        <div className="text-sm text-yellow-500 pl-2 -mt-1">{label} is Required</div>
      )}
    </div>
  );
}
