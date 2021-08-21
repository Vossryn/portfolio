import { useRef, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";

import Container from "../components/Container";
import TextInput from "./../components/Forms/TextInput/index";
import TextArea from "./../components/Forms/TextArea/index";
import LoadingSpinner from "../components/Svg/LoadingSpinner";

import styles from "../styles/contact.module.scss";

interface IFormValues {
  Email: string;
  "First Name": string;
  "Last Name": string;
  Subject: string;
  Message: string;
}

interface IResponseMsg {
  body: string | null;
  hasError: boolean;
}

export default function contact() {
  const formMethods = useForm();
  const recaptchaRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMsg, setResponseMsg] = useState<IResponseMsg>({
    body: null,
    hasError: true,
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    let recaptchaValue: null | string = null;
    if (recaptchaRef && recaptchaRef.current) {
      recaptchaValue = recaptchaRef.current?.getValue();
    }

    if (recaptchaValue !== null) {
      setIsLoading(true);
      fetch("api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
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
        })
        .finally(() => {
          formMethods.reset();
          recaptchaRef.current.reset();
          setIsLoading(false);
        });
    }
  };

  const clearMessage = () => {
    setResponseMsg({ body: null, hasError: false });
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      <Head>
        <title>Philip Portfolio - Contact</title>
      </Head>
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

            <div className="mt-4 w-full flex flex-col lg:flex-row gap-2 lg:justify-between">
              <ReCAPTCHA
                ref={recaptchaRef}
                theme="dark"
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              />
              {responseMsg.body ? (
                <div
                  className={`${
                    responseMsg.hasError
                      ? "bg-red-700 border-red-500"
                      : "bg-green-700 border-green-500"
                  } text-white border rounded-lg p-4 flex-1 flex align-middle justify-center text-base cursor-pointer`}
                  onClick={clearMessage}
                >
                  <div>{responseMsg.body}</div>
                </div>
              ) : null}
              <div className="mt-4 lg:mt-0">
                {isLoading ? (
                  <div className={`${styles.submitButton} flex`}>
                    <LoadingSpinner />
                    <div>Processing</div>
                  </div>
                ) : (
                  <button className={`${styles.submitButton} flex`} type="submit">
                    <div>Send</div>
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
}
