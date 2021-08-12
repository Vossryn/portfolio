import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";
import TextArea from "./../components/Forms/TextArea/index";

import styles from "../styles/contact.module.scss";

type IFormValues = {
  Email: string;
  Name: string;
  Subject: string;
  Message: string;
};

export default function contact() {
  const methods = useForm();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    fetch("api/contact", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

    if (recaptchaValue !== null) {
      fetch("api/contact", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptchaValue }),
      })
        .then((response) => response.json())
        .then((data) => {
          setResponseMsg({
            body: data.message,
            hasError: false,
          });
        })
        .catch((err) => {
          setResponseMsg({
            body: err.error,
            hasError: true,
          });
        });
    }
  };

  const clearMessage = () => {
    setResponseMsg({ body: null, hasError: false });
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      {responseMsg.body && !responseMsg.hasError ? (
        <div
          className="bg-green-700 border-green-500 text-white border rounded-lg absolute top-4 right-4 z-50 p-4"
          onClick={clearMessage}
        >
          {responseMsg.body}
        </div>
      ) : null}
      {responseMsg.body && responseMsg.hasError ? (
        <div
          className="bg-red-700 border-red-500 text-white border rounded-lg absolute top-4 right-4 z-50 p-4"
          onClick={clearMessage}
        >
          {responseMsg.body}
        </div>
      ) : null}
      <Container className="w-full">
        <div
          className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative ml-3 pl-1 uppercase before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
        >
          Contact
        </div>
      </Container>
      <Container className="w-full lg:w-1/3">
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
      </Container>

      <Container className="flex-1">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row flex-wrap gap-4 h-full pt-4"
          >
            <TextInput
              label="Email Address"
              placeholder="janedoe@email.com"
              type="email"
              className="w-full lg:w-1/3"
              required
            />

            <TextInput
              label="Subject"
              placeholder="Impressive subject line"
              className="w-full lg:flex-1"
              required
            />

            <TextArea
              label="Message"
              placeholder="Super impressive email message"
              className="w-full"
              required
            />

            <div className="mt-4 w-full flex flex-col lg:flex-row lg:justify-between">
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                onChange={onCaptchaChange}
              />
              <div className="mt-4 lg:mt-0">
                <button className={`${styles.submitButton}`} type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
}
