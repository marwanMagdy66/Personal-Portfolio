import nodemailer from 'nodemailer';
export async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 465,
    secure: true, // or 'STARTTLS'
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const info=await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html
  })
  console.log(info); //accepted
  if (info.accepted.length > 0) {
    return true;
  }
  return false;
}
