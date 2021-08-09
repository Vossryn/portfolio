import { useRef, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";
import TextArea from "./../components/Forms/TextArea/index";

import styles from "../styles/contact.module.scss";

type IFormValues = {
  "Email Address": string;
  Subject: string;
  Message: string;
};

interface ResponseMsg {
  body: string | null;
  hasError: boolean;
}

export default function contact() {
  const methods = useForm();
  const recaptchaRef = useRef<any>(null);
  const [responseMsg, setResponseMsg] = useState<ResponseMsg>({
    body: null,
    hasError: false,
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    let recaptchaValue: null | string = null;
    if (recaptchaRef && recaptchaRef.current) {
      recaptchaValue = recaptchaRef.current?.getValue();
    }

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
            body: data,
            hasError: false,
          });
        })
        .catch((error) => {
          setResponseMsg({
            body: error,
            hasError: true,
          });
        });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      {responseMsg.body && !responseMsg.hasError ? (
        <div className="bg-green-800 border-green-500 text-white rounded-lg blur-sm absolute top-4 right-4">
          {responseMsg.body}
        </div>
      ) : null}
      {responseMsg.body && responseMsg.hasError ? (
        <div className="bg-red-800 border-red-500 text-white rounded-lg blur-sm absolute top-4 right-4">
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
                ref={recaptchaRef}
                theme="dark"
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
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
