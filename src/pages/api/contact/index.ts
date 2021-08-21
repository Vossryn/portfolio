import type { NextApiRequest, NextApiResponse } from "next";
import { ReCAPTCHA } from "react-google-recaptcha";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type ResponseData = {
  message: string | null;
  error: string | null;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  try {
    if (req.method === "PUT") {
      const ReCAPTCHAResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: `secret=${process.env.SERVER_RECAPTCHA_SITE_KEY}&response=${req.body.recaptchaValue}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      const ReCAPTCHAData = await ReCAPTCHAResponse.json();

      console.log({ ReCAPTCHAData });

      if (ReCAPTCHAData.success) {
        const msg = {
          to: "vossryn@gmail.com",
          from: "portfolio@vossryn.com", // Use the email address or domain you verified above
          subject: req.body.Subject,
          html: `<div style="padding: 10px">${req.body["First Name"]} ${req.body["Last Name"]}</div>
          <div style="padding: 10px">${req.body.Email}</div>
          <hr />
          <div style="padding: 10px">${req.body.Message}</div>
          `,
        };

        await sgMail.send(msg);
        return res.status(200).json({ message: "Email sent", error: null });
      } else {
        return res.status(422).json({
          message: null,
          error: "There was an error with the ReCAPTCHA, please retry later.",
        });
      }
    } else {
      return res.status(404).json({ message: null, error: "Not a valid path/route." });
    }
  } catch (error) {
    console.error({ error });
    return res.status(404).json({ message: null, error: "Not a valid path/route." });
  }
};
