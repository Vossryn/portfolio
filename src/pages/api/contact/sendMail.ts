import fetch from "node-fetch";

const SENDGRID_API: string = "https://api.sendgrid.com/v3/mail/send";

interface sendEmailProps {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async ({ email, subject, message }: sendEmailProps) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "vossryn@gmail.com",
            },
          ],
          subject,
        },
      ],
      from: {
        email,
        name: "",
      },
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
    }),
  });
};

export { sendEmail };
