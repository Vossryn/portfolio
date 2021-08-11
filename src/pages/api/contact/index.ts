import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

import { sendEmail } from "./sendMail";

type ResponseData = {
  message: string | null;
  error: string | null;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  try {
    if (req.method === "PUT") {
      // const ReCAPTCHAResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      //   method: "post",
      //   body: JSON.stringify({
      //     secret: process.env.SERVER_RECAPTCHA_SITE_KEY,
      //     response: req.body.recaptchaValue,
      //   }),
      //   headers: { "Content-Type": "application/json" },
      // });
      // const ReCAPTCHAData = await ReCAPTCHAResponse.json();

      // if (ReCAPTCHAData.success) {
      if (true) {
        const msg = {
          email: req.body.emailAddress,
          subject: req.body.subject,
          message: req.body.message,
        };

        await sendEmail(msg);
        return res.status(200).json({ message: "Email sent", error: null });
      } else {
        return res.status(404).json({
          message: null,
          error: "There was an error with the ReCAPTCHA, please retry later.",
        });
      }
    } else {
      return res.status(404).json({ message: null, error: "Not a valid path/route." });
    }
  } catch (error) {
    return res.status(404).json({ message: null, error: "Not a valid path/route." });
  }
};
