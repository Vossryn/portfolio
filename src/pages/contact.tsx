import { useForm, SubmitHandler } from "react-hook-form";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";

import styles from "../styles/about.module.scss";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

export default function contact() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      <Container className="w-full">
        <div
          className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative ml-3 pl-1 uppercase before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
        >
          Contact
        </div>
      </Container>
      <Container className="w-1/3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure placeat ex
          perspiciatis sequi deserunt iusto, dolorem magni laudantium maxime aliquam. Beatae maiores
          dolores laudantium?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequuntur, cumque
          porro aperiam quam praesentium facilis in explicabo beatae fugit rerum adipisci assumenda
          veniam eaque?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequuntur, cumque
          porro aperiam quam praesentium facilis in explicabo beatae fugit rerum adipisci assumenda
          veniam eaque?
        </div>
      </Container>

      <Container className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <TextInput label="Email Address" className="text-black" register={register} required />
          <TextInput label="Subject" className="text-black" register={register} />
          <TextInput label="Message" className="text-black" register={register} />

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} /> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <input className="text-black" type="submit" value="Send Request" />
        </form>
      </Container>
    </div>
  );
}
