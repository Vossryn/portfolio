import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";
import TextArea from "./../components/Forms/TextArea/index";

import styles from "../styles/contact.module.scss";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

export default function contact() {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
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
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-wrap gap-4 h-full pt-4"
          >
            <TextInput label="Email Address" type="email" className="w-full lg:w-1/3" required />

            <TextInput label="Subject" className="w-full lg:flex-1" required />

            <TextArea label="Message" className="w-full h-1/2" required />

            <div className="w-full text-right">
              <button className={styles.submitButton} type="submit">
                Send Request
              </button>
            </div>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
}
