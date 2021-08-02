import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import sgMail from "@sendgrid/mail";

type ResponseData = {
  message: string | null;
  error: string | null;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : "");

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === "POST") {
    const ReCAPTCHAResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "post",
      body: JSON.stringify({
        secret: process.env.SERVER_RECAPTCHA_SITE_KEY,
        response: req.body.recaptchaValue,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const ReCAPTCHAData = await ReCAPTCHAResponse.json();

    if (ReCAPTCHAData.success) {
      const msg = {
        to: "vossryn@gmail.com",
        from: req.body.emailAddress,
        subject: req.body.subject,
        text: req.body.message,
      };

      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({ message: "Email sent", error: null });
        })
        .catch(() => {
          res.status(404).json({
            message: null,
            error: "There was an error sending the email, please retry later.",
          });
        });
    } else {
      res.status(404).json({
        message: null,
        error: "There was an error with the ReCAPTCHA, please retry later.",
      });
    }
  } else {
    res.status(404).json({ message: null, error: "Not a valid path/route." });
  }
};
