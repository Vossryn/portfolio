import { useRef, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";
import TextArea from "./../components/Forms/TextArea/index";

import styles from "../styles/contact.module.scss";

type IFormValues = {
  Email: string;
  "First Name": string;
  "Last Name": string;
  Subject: string;
  Message: string;
};

interface ResponseMsg {
  body: string | null;
  hasError: boolean;
}

export default function contact() {
  const formMethods = useForm();
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
            body: data.message,
            hasError: false,
          });
          formMethods.reset();
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
      <Container className="flex-1">
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row flex-wrap gap-4 h-full pt-4"
          >
            <TextInput
              label="First Name"
              placeholder="Jane"
              className="w-full lg:flex-1"
              required
            />

            <TextInput label="Last Name" placeholder="Doe" className="w-full lg:flex-1" required />

            <TextInput
              label="Email"
              placeholder="janedoe@email.com"
              type="email"
              className="w-full lg:flex-1"
              required
            />

            <TextInput
              label="Subject"
              placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              className="w-full"
              required
            />

            <TextArea
              label="Message"
              placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
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
